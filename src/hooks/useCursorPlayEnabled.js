import { useEffect, useState } from 'react';

/**
 * True when a fine pointing device exists. We use both `pointer` (primary)
 * and `any-pointer` so hybrid touch+trackpad/mouse laptops still qualify — many
 * UAs report `(pointer: coarse)` while a trackpad is available.
 */
function hasFinePointerInput() {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(pointer: fine)').matches ||
    window.matchMedia('(any-pointer: fine)').matches
  );
}

function readCursorPlayEnabled() {
  if (typeof window === 'undefined') return false;
  const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return motionOk && hasFinePointerInput();
}

function readGlimmerGameEnabled() {
  if (typeof window === 'undefined') return false;
  return hasFinePointerInput();
}

function subscribeMediaQuery(mql, handler) {
  if (typeof mql.addEventListener === 'function') {
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }
  mql.addListener(handler);
  return () => mql.removeListener(handler);
}

/**
 * Fine pointer + no reduced motion — ambient CursorAura only (parallax / custom cursor).
 */
export function useCursorPlayEnabled() {
  const [enabled, setEnabled] = useState(readCursorPlayEnabled);

  useEffect(() => {
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointerMq = window.matchMedia('(pointer: fine)');
    const anyPointerMq = window.matchMedia('(any-pointer: fine)');

    const sync = () => {
      setEnabled(!motionMq.matches && (pointerMq.matches || anyPointerMq.matches));
    };

    sync();

    const unsubMotion = subscribeMediaQuery(motionMq, sync);
    const unsubPointer = subscribeMediaQuery(pointerMq, sync);
    const unsubAnyPointer = subscribeMediaQuery(anyPointerMq, sync);

    return () => {
      unsubMotion();
      unsubPointer();
      unsubAnyPointer();
    };
  }, []);

  return enabled;
}

/**
 * Glimmer orbs: pointer check only. Interactive play stays available when the user
 * prefers reduced motion; heavy ambient effects stay gated by useCursorPlayEnabled.
 */
export function useGlimmerGameEnabled() {
  const [enabled, setEnabled] = useState(readGlimmerGameEnabled);

  useEffect(() => {
    const pointerMq = window.matchMedia('(pointer: fine)');
    const anyPointerMq = window.matchMedia('(any-pointer: fine)');

    const sync = () => {
      setEnabled(pointerMq.matches || anyPointerMq.matches);
    };

    sync();

    const unsubPointer = subscribeMediaQuery(pointerMq, sync);
    const unsubAnyPointer = subscribeMediaQuery(anyPointerMq, sync);

    return () => {
      unsubPointer();
      unsubAnyPointer();
    };
  }, []);

  return enabled;
}

import { useEffect, useState } from 'react';

function readCursorPlayEnabled() {
  if (typeof window === 'undefined') return false;
  const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  return motionOk && finePointer;
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
 * Fine pointer + no reduced motion — matches CursorAura eligibility.
 * Reads matchMedia on first paint (avoids a frame with enabled=false) and
 * subscribes to changes so DevTools device mode / OS toggles update without refresh.
 */
export function useCursorPlayEnabled() {
  const [enabled, setEnabled] = useState(readCursorPlayEnabled);

  useEffect(() => {
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointerMq = window.matchMedia('(pointer: fine)');

    const sync = () => {
      setEnabled(!motionMq.matches && pointerMq.matches);
    };

    sync();

    const unsubMotion = subscribeMediaQuery(motionMq, sync);
    const unsubPointer = subscribeMediaQuery(pointerMq, sync);

    return () => {
      unsubMotion();
      unsubPointer();
    };
  }, []);

  return enabled;
}

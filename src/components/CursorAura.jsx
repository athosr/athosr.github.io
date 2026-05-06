import { useEffect, useRef } from 'react';
import { useCursorPlayEnabled } from '../hooks/useCursorPlayEnabled';

const INTERACTIVE_SELECTOR =
  'a,button,input,textarea,select,[role="button"],[data-cursor-hover],summary,.cursor-pointer';

export default function CursorAura() {
  const enabled = useCursorPlayEnabled();
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafId = useRef(0);
  const hoverRef = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    root.classList.add('has-custom-cursor');

    const setVars = (x, y) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      root.style.setProperty('--cursor-x', `${x}px`);
      root.style.setProperty('--cursor-y', `${y}px`);
      root.style.setProperty('--cursor-nx', String(x / w));
      root.style.setProperty('--cursor-ny', String(y / h));
      // Counter-moving wash so the whole canvas feels tied to the pointer
      const px = w * 0.5 + (w * 0.5 - x) * 0.4;
      const py = h * 0.5 + (h * 0.5 - y) * 0.4;
      root.style.setProperty('--cursor-parallax-x', `${px}px`);
      root.style.setProperty('--cursor-parallax-y', `${py}px`);
    };

    const syncHover = (clientX, clientY, eventTarget) => {
      const el =
        eventTarget instanceof Element
          ? eventTarget
          : document.elementFromPoint(clientX, clientY);
      const next =
        el instanceof Element ? Boolean(el.closest(INTERACTIVE_SELECTOR)) : false;
      if (next !== hoverRef.current) {
        hoverRef.current = next;
        if (ringRef.current) {
          ringRef.current.dataset.hover = next ? 'true' : 'false';
        }
        if (dotRef.current) {
          dotRef.current.dataset.hover = next ? 'true' : 'false';
        }
      }
    };

    const onPointerMove = (e) => {
      if (e.pointerType === 'touch') return;
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      setVars(e.clientX, e.clientY);
      syncHover(e.clientX, e.clientY, e.target);
    };

    const tick = () => {
      const lerp = 0.14;
      ring.current.x += (target.current.x - ring.current.x) * lerp;
      ring.current.y += (target.current.y - ring.current.y) * lerp;

      const rx = ring.current.x;
      const ry = ring.current.y;
      const tx = target.current.x;
      const ty = target.current.y;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    const w = window.innerWidth;
    const h = window.innerHeight;
    target.current.x = w / 2;
    target.current.y = h / 2;
    ring.current.x = w / 2;
    ring.current.y = h / 2;
    setVars(w / 2, h / 2);

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      cancelAnimationFrame(rafId.current);
      root.classList.remove('has-custom-cursor');
      root.style.removeProperty('--cursor-x');
      root.style.removeProperty('--cursor-y');
      root.style.removeProperty('--cursor-nx');
      root.style.removeProperty('--cursor-ny');
      root.style.removeProperty('--cursor-parallax-x');
      root.style.removeProperty('--cursor-parallax-y');
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 cursor-aura-stack" aria-hidden>
        <div className="cursor-aura-layer cursor-aura-layer--wash" />
        <div className="cursor-aura-layer cursor-aura-layer--parallax" />
        <div className="cursor-aura-layer cursor-aura-layer--core" />
      </div>
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[10001] cursor-aura-ring"
        data-hover="false"
        aria-hidden
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[10002] cursor-aura-dot"
        data-hover="false"
        aria-hidden
      />
    </>
  );
}

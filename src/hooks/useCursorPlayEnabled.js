import { useEffect, useState } from 'react';

/** Fine pointer + no reduced motion — matches CursorAura eligibility. */
export function useCursorPlayEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(motionOk && finePointer);
  }, []);

  return enabled;
}

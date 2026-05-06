import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useCursorGame } from '../contexts/CursorGameContext';
import { GLIMMER_MILESTONES } from '../constants/glimmerAchievements';
import { playGlimmerAchievementSound } from '../utils/glimmerAudio';

const TOAST_MS = 10_000;

export default function GlimmerAchievementToast() {
  const { glimmerScore } = useCursorGame();
  const initialScoreRef = useRef(glimmerScore);
  const prevScoreRef = useRef(null);
  const claimedRef = useRef(new Set());
  const [toast, setToast] = useState(null);
  const dismissTimerRef = useRef(0);

  useLayoutEffect(() => {
    const start = initialScoreRef.current;
    for (const m of GLIMMER_MILESTONES) {
      if (m.threshold <= start) claimedRef.current.add(m.threshold);
    }
    prevScoreRef.current = start;
  }, []);

  useEffect(() => {
    if (prevScoreRef.current === null) return;
    const prev = prevScoreRef.current;
    const next = glimmerScore;
    prevScoreRef.current = next;

    if (next <= prev) return;

    let newest = null;
    for (const m of GLIMMER_MILESTONES) {
      if (prev < m.threshold && next >= m.threshold && !claimedRef.current.has(m.threshold)) {
        claimedRef.current.add(m.threshold);
        newest = m;
      }
    }
    if (newest) {
      setToast(newest);
      playGlimmerAchievementSound();
    }
  }, [glimmerScore]);

  useEffect(() => {
    if (!toast) return;
    window.clearTimeout(dismissTimerRef.current);
    dismissTimerRef.current = window.setTimeout(() => setToast(null), TOAST_MS);
    return () => window.clearTimeout(dismissTimerRef.current);
  }, [toast]);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          key={toast.id}
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
          className="pointer-events-auto fixed bottom-[max(5.5rem,env(safe-area-inset-bottom,0px))] right-4 z-[10000] max-w-[min(20rem,calc(100vw-2rem))] cursor-default rounded-xl border border-slate-200/90 bg-white/95 px-4 py-3 shadow-lg shadow-slate-900/10 backdrop-blur-md dark:border-slate-600/50 dark:bg-slate-900/95 dark:shadow-black/40 md:right-6"
        >
          <p className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
            Achievement
          </p>
          <p className="mt-1 font-display text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
            {toast.title}
          </p>
          <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">{toast.subtitle}</p>
          <button
            type="button"
            onClick={() => setToast(null)}
            className="mt-3 text-xs font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            Dismiss
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

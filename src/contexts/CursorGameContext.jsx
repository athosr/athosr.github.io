import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  GLIMMER_SCORE_STORAGE_KEY,
  readStoredGlimmerScore,
} from '../constants/glimmerAchievements';

const CursorGameContext = createContext(null);

export function CursorGameProvider({ children }) {
  const [glimmerScore, setGlimmerScore] = useState(() => readStoredGlimmerScore());

  useEffect(() => {
    try {
      localStorage.setItem(GLIMMER_SCORE_STORAGE_KEY, String(glimmerScore));
    } catch {
      /* private mode / quota */
    }
  }, [glimmerScore]);

  const value = useMemo(
    () => ({ glimmerScore, setGlimmerScore }),
    [glimmerScore],
  );
  return <CursorGameContext.Provider value={value}>{children}</CursorGameContext.Provider>;
}

export function useCursorGame() {
  const ctx = useContext(CursorGameContext);
  if (!ctx) {
    return { glimmerScore: 0, setGlimmerScore: () => {} };
  }
  return ctx;
}

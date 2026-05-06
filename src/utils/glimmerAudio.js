let glimmerAudioCtx = null;
let userUnlockListenersAttached = false;

function attachUserGestureUnlockListeners() {
  if (userUnlockListenersAttached || typeof window === 'undefined') return;
  userUnlockListenersAttached = true;
  const bump = () => {
    void resolveGlimmerAudioContext();
  };
  for (const type of ['pointerdown', 'keydown', 'touchstart']) {
    window.addEventListener(type, bump, { capture: true, passive: true });
  }
}

/**
 * Ensures a context exists and is running. Must be awaited before scheduling
 * nodes — otherwise sounds are dropped while suspended (common after refresh).
 */
async function resolveGlimmerAudioContext() {
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  attachUserGestureUnlockListeners();
  if (glimmerAudioCtx?.state === 'closed') {
    glimmerAudioCtx = null;
  }
  if (!glimmerAudioCtx) {
    glimmerAudioCtx = new AC();
  }
  if (glimmerAudioCtx.state === 'suspended') {
    try {
      await glimmerAudioCtx.resume();
    } catch {
      return null;
    }
  }
  return glimmerAudioCtx.state === 'running' ? glimmerAudioCtx : null;
}

/**
 * Hint that the user may be interacting (e.g. pointer move). Runs the same
 * async unlock as playback so movement can resume audio where the browser allows it.
 */
export function primeGlimmerAudio() {
  attachUserGestureUnlockListeners();
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  if (glimmerAudioCtx?.state === 'closed') {
    glimmerAudioCtx = null;
  }
  if (!glimmerAudioCtx) {
    glimmerAudioCtx = new AC();
  }
  void resolveGlimmerAudioContext();
  return glimmerAudioCtx;
}

/**
 * Browsers usually require *some* user activation before audio can run, but we still
 * try early: e.g. opening this tab by clicking a link can leave transient activation
 * that lets resume() succeed before the first press on *this* page.
 */
function scheduleEarlyUnlockAttempts() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  const kick = () => void resolveGlimmerAudioContext();
  queueMicrotask(kick);
  if (document.readyState === 'complete') {
    requestAnimationFrame(kick);
  } else {
    window.addEventListener('load', kick, { once: true, passive: true });
  }
  window.addEventListener('pageshow', kick, { passive: true });
  document.addEventListener(
    'visibilitychange',
    () => {
      if (document.visibilityState === 'visible') kick();
    },
    { passive: true },
  );
}

scheduleEarlyUnlockAttempts();

/** Optional teardown; avoid calling from React effect cleanups (Strict Mode closes a working context). */
export function closeGlimmerAudio() {
  if (glimmerAudioCtx) {
    void glimmerAudioCtx.close();
    glimmerAudioCtx = null;
  }
}

/** Very quiet short “tick” on orb collect */
export function playGlimmerCollectSound() {
  void (async () => {
    try {
      const ac = await resolveGlimmerAudioContext();
      if (!ac) return;

      const t0 = ac.currentTime;
      const dur = 0.085;
      const osc = ac.createOscillator();
      const gain = ac.createGain();

      osc.type = 'sine';
      const f0 = 620 + Math.random() * 100;
      osc.frequency.setValueAtTime(f0, t0);
      osc.frequency.exponentialRampToValueAtTime(f0 * 1.32, t0 + dur * 0.4);

      const peak = 0.02;
      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.linearRampToValueAtTime(peak, t0 + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);

      osc.connect(gain);
      gain.connect(ac.destination);
      osc.start(t0);
      osc.stop(t0 + dur + 0.015);
    } catch {
      /* ignore */
    }
  })();
}

/** Slightly richer two-note chime for achievements — still subtle */
export function playGlimmerAchievementSound() {
  void (async () => {
    try {
      const ac = await resolveGlimmerAudioContext();
      if (!ac) return;

      const t0 = ac.currentTime;
      const peak = 0.03;

      const playNote = (start, freq, duration) => {
        const osc = ac.createOscillator();
        const g = ac.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);
        g.gain.setValueAtTime(0.0001, start);
        g.gain.linearRampToValueAtTime(peak, start + 0.018);
        g.gain.exponentialRampToValueAtTime(0.0001, start + duration);
        osc.connect(g);
        g.connect(ac.destination);
        osc.start(start);
        osc.stop(start + duration + 0.02);
      };

      playNote(t0, 523.25, 0.11);
      playNote(t0 + 0.09, 659.25, 0.13);
    } catch {
      /* ignore */
    }
  })();
}

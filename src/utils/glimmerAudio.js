/**
 * Glimmer audio.
 *
 * Browsers block AudioContext from starting (and warn loudly in the console)
 * unless it is created or resumed inside a user gesture. We therefore:
 *   1. NEVER instantiate an AudioContext at module load.
 *   2. Attach idempotent capture-phase listeners for the gestures that count
 *      (pointerdown / keydown / touchstart). The first one creates and resumes
 *      the context; subsequent gestures are cheap no-ops.
 *   3. Treat playback calls as silent no-ops while the context is missing or
 *      suspended, so callers (orb collect, achievement chime) never need to
 *      know about the unlock state.
 */

const GESTURE_EVENTS = ['pointerdown', 'keydown', 'touchstart'];

let audioContext = null;
let gestureListenersAttached = false;

function getAudioContextCtor() {
  if (typeof window === 'undefined') return null;
  return window.AudioContext || window.webkitAudioContext || null;
}

/** Create the context on demand. Safe outside a gesture: the context will simply stay suspended. */
function ensureAudioContext() {
  const Ctor = getAudioContextCtor();
  if (!Ctor) return null;
  if (audioContext?.state === 'closed') audioContext = null;
  if (!audioContext) {
    try {
      audioContext = new Ctor();
    } catch {
      audioContext = null;
    }
  }
  return audioContext;
}

/**
 * Runs only for trusted (real) user input. Extensions and scripts often dispatch
 * synthetic keydown/pointer events; those are not a valid audio unlock and cause
 * Chrome to warn + burn the gesture budget without actually starting audio.
 */
function unlockFromUserGesture(event) {
  if (event && !event.isTrusted) return;
  const ac = ensureAudioContext();
  if (!ac) return;
  if (ac.state === 'suspended') {
    ac.resume().catch(() => {
      /* user may have denied autoplay; will retry on the next gesture */
    });
  }
}

function attachUserGestureUnlockListeners() {
  if (gestureListenersAttached || typeof window === 'undefined') return;
  gestureListenersAttached = true;
  for (const type of GESTURE_EVENTS) {
    window.addEventListener(type, unlockFromUserGesture, {
      capture: true,
      passive: true,
    });
  }
}

if (typeof window !== 'undefined') {
  attachUserGestureUnlockListeners();
}

/** Public hook for components that want to be defensive. Idempotent; never creates audio outside a gesture. */
export function primeGlimmerAudio() {
  attachUserGestureUnlockListeners();
}

/** Optional teardown; avoid calling from React effect cleanups (Strict Mode would close a working context). */
export function closeGlimmerAudio() {
  if (audioContext) {
    void audioContext.close();
    audioContext = null;
  }
}

function runningAudioContext() {
  return audioContext && audioContext.state === 'running' ? audioContext : null;
}

/** Quiet short tick on orb collect. Silent until the user has interacted at least once. */
export function playGlimmerCollectSound() {
  const ac = runningAudioContext();
  if (!ac) return;
  try {
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
}

/** Two-note chime for achievements. Same gesture-unlock contract as the collect sound. */
export function playGlimmerAchievementSound() {
  const ac = runningAudioContext();
  if (!ac) return;
  try {
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
}

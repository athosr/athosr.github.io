import { useEffect, useRef, useState } from 'react';
import { useCursorPlayEnabled } from '../hooks/useCursorPlayEnabled';
import { useCursorGame } from '../contexts/CursorGameContext';
import { glimmerMilestonesWithUnlocks } from '../constants/glimmerAchievements';
import {
  normalizeGlimmerSpawnScore,
  orbBurstParticleCount,
  orbPaletteForTheme,
  pickGlimmerOrbTier,
  sparkRgba,
} from '../constants/glimmerOrbTiers';
import { playGlimmerCollectSound, primeGlimmerAudio } from '../utils/glimmerAudio';

const ORB_COUNT = 16;
const MIN_ORB_R = 2.5;
const MAX_ORB_R = 5.5;
const CATCH_BASE = 13;
const REPULSE_RADIUS = 100;
const REPULSE_FORCE = 0.6;
const MAX_SPEED = 1.05;

function rand(a, b) {
  return a + Math.random() * (b - a);
}

function spawnOrb(w, h, mx, my, glimmerScore) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < 48; i += 1) {
    x = rand(28, Math.max(28, w - 28));
    y = rand(28, Math.max(28, h - 28));
    if (Math.hypot(x - mx, y - my) > 96) break;
  }
  const tier = pickGlimmerOrbTier(glimmerScore);
  return {
    x,
    y,
    vx: rand(-0.42, 0.42),
    vy: rand(-0.42, 0.42),
    r: rand(MIN_ORB_R, MAX_ORB_R),
    phase: rand(0, Math.PI * 2),
    tier,
  };
}

export default function BackgroundCursorGame() {
  const enabled = useCursorPlayEnabled();
  const canvasRef = useRef(null);
  const hudRef = useRef(null);
  const { glimmerScore, setGlimmerScore } = useCursorGame();
  const scoreForSpawnRef = useRef(glimmerScore);
  scoreForSpawnRef.current = glimmerScore;
  const mouseRef = useRef({ x: 0, y: 0 });
  const [achievementsOpen, setAchievementsOpen] = useState(false);

  useEffect(() => {
    if (!achievementsOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setAchievementsOpen(false);
    };
    const onDown = (e) => {
      if (hudRef.current && !hudRef.current.contains(e.target)) {
        setAchievementsOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDown);
    };
  }, [achievementsOpen]);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    const orbs = [];
    const sparks = [];
    /** Keeps spawn tier in sync with collects; setState from rAF may not run before next line. */
    let runningScore = normalizeGlimmerSpawnScore(scoreForSpawnRef.current);

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const el = document.documentElement;
      w = el.clientWidth || window.innerWidth;
      h = el.clientHeight || window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initOrbs = () => {
      orbs.length = 0;
      const mx = mouseRef.current.x || w / 2;
      const my = mouseRef.current.y || h / 2;
      for (let i = 0; i < ORB_COUNT; i += 1) {
        orbs.push(spawnOrb(w, h, mx, my, runningScore));
      }
    };

    const burst = (x, y, tier) => {
      const n = orbBurstParticleCount(tier);
      for (let i = 0; i < n; i += 1) {
        const a = (i / n) * Math.PI * 2 + rand(0, 0.35);
        sparks.push({
          x,
          y,
          vx: Math.cos(a) * rand(1.1, 2.9),
          vy: Math.sin(a) * rand(1.1, 2.9),
          life: 1,
          tier,
        });
      }
    };

    resize();
    mouseRef.current.x = w / 2;
    mouseRef.current.y = h / 2;
    initOrbs();

    const onPointerMove = (e) => {
      if (e.pointerType === 'touch') return;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      primeGlimmerAudio();
    };

    const onPointerDown = (e) => {
      if (e.pointerType === 'touch') return;
      primeGlimmerAudio();
    };

    const onResize = () => {
      resize();
      for (const o of orbs) {
        o.x = Math.min(Math.max(o.x, 20), w - 20);
        o.y = Math.min(Math.max(o.y, 20), h - 20);
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('resize', onResize);
    const vv = window.visualViewport;
    if (vv) {
      vv.addEventListener('resize', onResize);
      vv.addEventListener('scroll', onResize);
    }

    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (document.hidden) return;

      const isDark = document.documentElement.classList.contains('dark');
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx.clearRect(0, 0, w, h);

      for (const o of orbs) {
        o.phase += 0.021;
        const pulse = 1 + Math.sin(o.phase) * 0.13;
        const r = o.r * pulse;

        let dx = o.x - mx;
        let dy = o.y - my;
        const distPush = Math.hypot(dx, dy);

        if (distPush < REPULSE_RADIUS && distPush > 0.001) {
          const force = (1 - distPush / REPULSE_RADIUS) * REPULSE_FORCE;
          o.vx += (dx / distPush) * force * 0.17;
          o.vy += (dy / distPush) * force * 0.17;
        }

        let sp = Math.hypot(o.vx, o.vy);
        if (sp > MAX_SPEED) {
          o.vx = (o.vx / sp) * MAX_SPEED;
          o.vy = (o.vy / sp) * MAX_SPEED;
        }
        o.vx *= 0.997;
        o.vy *= 0.997;

        o.x += o.vx;
        o.y += o.vy;

        if (o.x < -r) o.x = w + r;
        if (o.x > w + r) o.x = -r;
        if (o.y < -r) o.y = h + r;
        if (o.y > h + r) o.y = -r;

        const distCatch = Math.hypot(o.x - mx, o.y - my);
        if (distCatch < CATCH_BASE + r) {
          const { tier } = o;
          burst(o.x, o.y, tier);
          runningScore += tier.points;
          setGlimmerScore(runningScore);
          Object.assign(o, spawnOrb(w, h, mx, my, runningScore));
          playGlimmerCollectSound();
          continue;
        }

        const pal = orbPaletteForTheme(o.tier, isDark);

        ctx.beginPath();
        ctx.arc(o.x, o.y, r + 7, 0, Math.PI * 2);
        ctx.fillStyle = pal.glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(o.x, o.y, r, 0, Math.PI * 2);
        ctx.fillStyle = pal.fill;
        ctx.fill();
        ctx.strokeStyle = pal.stroke;
        ctx.lineWidth = isDark ? 1.1 : 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(o.x - r * 0.25, o.y - r * 0.25, Math.max(0.8, r * 0.28), 0, Math.PI * 2);
        ctx.fillStyle = pal.glint;
        ctx.fill();
      }

      for (let i = sparks.length - 1; i >= 0; i -= 1) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.038;
        s.vx *= 0.965;
        s.vy *= 0.965;
        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.35 * s.life, 0, Math.PI * 2);
        ctx.fillStyle = sparkRgba(s.tier, isDark, s.life);
        ctx.fill();
      }
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('resize', onResize);
      if (vv) {
        vv.removeEventListener('resize', onResize);
        vv.removeEventListener('scroll', onResize);
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[1] h-full w-full bg-transparent"
        style={{ background: 'transparent' }}
        aria-hidden
      />
      <div
        ref={hudRef}
        className="pointer-events-auto fixed bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] left-5 z-[10000] flex max-w-[min(18rem,calc(100vw-2.5rem))] flex-col items-stretch gap-2"
      >
        <button
          type="button"
          onClick={() => setAchievementsOpen((o) => !o)}
          aria-expanded={achievementsOpen}
          aria-haspopup="dialog"
          aria-controls="glimmer-achievements-panel"
          className="flex max-w-[13rem] cursor-pointer select-none items-center justify-between gap-2 rounded-lg border border-slate-300/85 bg-gradient-to-b from-white to-slate-50/95 px-3 py-2 text-left font-mono text-[10px] font-medium uppercase leading-relaxed tracking-[0.18em] text-slate-700 shadow-[0_1px_2px_rgba(15,23,42,0.07),0_2px_6px_rgba(15,23,42,0.05)] backdrop-blur-md transition-[transform,box-shadow,border-color,background-color] hover:border-slate-400/90 hover:from-white hover:to-slate-50 hover:shadow-md active:scale-[0.98] active:shadow-sm dark:border-slate-500/55 dark:from-slate-900 dark:to-slate-950 dark:text-slate-200/95 dark:shadow-black/25 dark:hover:border-slate-400/50 dark:hover:to-slate-900/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
          title="Drift orbs into your cursor to collect them. Click to view achievements."
        >
          <span className="min-w-0">
            Glimmers <span className="tabular-nums">{glimmerScore}</span>
          </span>
          <svg
            className={`h-3.5 w-3.5 shrink-0 text-slate-500 transition-transform duration-200 dark:text-slate-400 ${achievementsOpen ? '-rotate-180' : ''}`}
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M3 4.5 6 7.5 9 4.5" />
          </svg>
        </button>
        {achievementsOpen && (
          <div
            id="glimmer-achievements-panel"
            role="dialog"
            aria-label="Glimmer achievements"
            className="rounded-xl border border-slate-200/90 bg-white/95 px-3 py-3 shadow-lg shadow-slate-900/10 backdrop-blur-md dark:border-slate-600/50 dark:bg-slate-900/95 dark:shadow-black/40"
          >
            <p className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
              Achievements
            </p>
            <ul className="mt-2 max-h-[min(50vh,16rem)] space-y-2 overflow-y-auto pr-0.5">
              {glimmerMilestonesWithUnlocks(glimmerScore).map((m) => (
                <li
                  key={m.id}
                  className={`rounded-lg border px-2.5 py-2 text-left ${
                    m.unlocked
                      ? 'border-primary-500/25 bg-primary-500/5 dark:border-primary-400/30 dark:bg-primary-400/10'
                      : 'border-slate-200/70 bg-slate-50/80 dark:border-slate-600/40 dark:bg-slate-950/40'
                  }`}
                >
                  <p
                    className={`font-display text-sm font-semibold tracking-tight ${
                      m.unlocked ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {m.title}
                    {m.unlocked ? (
                      <span className="ml-1.5 text-primary-600 dark:text-primary-400" aria-hidden>
                        ✓
                      </span>
                    ) : null}
                  </p>
                  <p
                    className={`mt-0.5 text-xs ${
                      m.unlocked ? 'text-slate-600 dark:text-slate-400' : 'text-slate-500/90 dark:text-slate-500'
                    }`}
                  >
                    {m.unlocked ? m.subtitle : `${m.threshold.toLocaleString()} glimmers · need ${Math.max(0, m.threshold - glimmerScore).toLocaleString()} more`}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

/** Ordered thresholds — checked when score crosses each */
export const GLIMMER_MILESTONES = [
  { threshold: 10, id: 'spark', title: 'First Spark', subtitle: '10 glimmers collected' },
  { threshold: 100, id: 'glow', title: 'Steady Glow', subtitle: '100 glimmers collected' },
  { threshold: 500, id: 'radiance', title: 'Bright Trail', subtitle: '500 glimmers collected' },
  { threshold: 1000, id: 'constellation', title: 'Full Constellation', subtitle: '1,000 glimmers collected' },
  { threshold: 10000, id: 'why', title: 'Why?????', subtitle: '10,000 glimmers collected' },
];

export const GLIMMER_SCORE_STORAGE_KEY = 'athos-portfolio-glimmer-score';

export function readStoredGlimmerScore() {
  try {
    const raw = localStorage.getItem(GLIMMER_SCORE_STORAGE_KEY);
    if (raw == null) return 0;
    const n = Number(raw);
    return Number.isFinite(n) && n >= 0 ? Math.floor(n) : 0;
  } catch {
    return 0;
  }
}

/** Milestones with unlock state derived from current glimmer count */
export function glimmerMilestonesWithUnlocks(glimmerScore) {
  return GLIMMER_MILESTONES.map((m) => ({
    ...m,
    unlocked: glimmerScore >= m.threshold,
  }));
}

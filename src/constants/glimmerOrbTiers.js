/**
 * Orb tiers: cumulative spawnChance among *eligible* tiers only (rarest checked first).
 * minScore gates when a tier can appear (aligned with achievement thresholds).
 */

const palette = (light, dark) => ({ light, dark });

export const GLIMMER_ORB_BLUE = {
  id: 'blue',
  points: 1,
  minScore: 0,
  spawnChance: 0,
  ...palette(
    {
      fill: 'rgba(14, 165, 233, 0.68)',
      stroke: 'rgba(2, 132, 199, 0.82)',
      glow: 'rgba(14, 165, 233, 0.32)',
      glint: 'rgba(255, 255, 255, 0.55)',
    },
    {
      fill: 'rgba(56, 189, 248, 0.72)',
      stroke: 'rgba(186, 230, 253, 0.88)',
      glow: 'rgba(56, 189, 248, 0.38)',
      glint: 'rgba(255, 255, 255, 0.35)',
    },
  ),
  spark: {
    light: [14, 165, 233],
    dark: [186, 230, 253],
  },
};

/** Rarest first — spawnChance is marginal probability when minScore is satisfied */
export const GLIMMER_ORB_SPECIAL_TIERS = [
  {
    id: 'grey',
    points: 100,
    minScore: 500,
    spawnChance: 0.01,
    /* Platinum / slate grey — distinct from blue, yellow, red, violet */
    ...palette(
      {
        fill: 'rgba(148, 163, 184, 0.8)',
        stroke: 'rgba(71, 85, 105, 0.9)',
        glow: 'rgba(203, 213, 225, 0.48)',
        glint: 'rgba(255, 255, 255, 0.78)',
      },
      {
        fill: 'rgba(186, 198, 214, 0.82)',
        stroke: 'rgba(241, 245, 249, 0.9)',
        glow: 'rgba(148, 163, 184, 0.4)',
        glint: 'rgba(248, 250, 252, 0.55)',
      },
    ),
    spark: { light: [100, 116, 139], dark: [226, 232, 240] },
  },
  {
    id: 'violet',
    points: 50,
    minScore: 500,
    spawnChance: 0.02,
    ...palette(
      {
        fill: 'rgba(91, 33, 182, 0.76)',
        stroke: 'rgba(49, 46, 129, 0.88)',
        glow: 'rgba(124, 58, 237, 0.38)',
        glint: 'rgba(216, 180, 254, 0.55)',
      },
      {
        fill: 'rgba(167, 139, 250, 0.74)',
        stroke: 'rgba(196, 181, 253, 0.9)',
        glow: 'rgba(139, 92, 246, 0.4)',
        glint: 'rgba(237, 233, 254, 0.45)',
      },
    ),
    spark: { light: [124, 58, 237], dark: [216, 180, 254] },
  },
  {
    id: 'red',
    points: 20,
    minScore: 100,
    spawnChance: 0.04,
    ...palette(
      {
        fill: 'rgba(239, 68, 68, 0.74)',
        stroke: 'rgba(185, 28, 28, 0.88)',
        glow: 'rgba(248, 113, 113, 0.36)',
        glint: 'rgba(255, 255, 255, 0.6)',
      },
      {
        fill: 'rgba(248, 113, 113, 0.76)',
        stroke: 'rgba(254, 202, 202, 0.9)',
        glow: 'rgba(239, 68, 68, 0.4)',
        glint: 'rgba(255, 255, 255, 0.42)',
      },
    ),
    spark: { light: [220, 38, 38], dark: [254, 202, 202] },
  },
  {
    id: 'yellow',
    points: 10,
    minScore: 10,
    spawnChance: 0.07,
    ...palette(
      {
        fill: 'rgba(234, 179, 8, 0.76)',
        stroke: 'rgba(180, 83, 9, 0.88)',
        glow: 'rgba(250, 204, 21, 0.36)',
        glint: 'rgba(255, 255, 255, 0.65)',
      },
      {
        fill: 'rgba(250, 204, 21, 0.78)',
        stroke: 'rgba(254, 243, 199, 0.92)',
        glow: 'rgba(250, 204, 21, 0.42)',
        glint: 'rgba(255, 251, 235, 0.45)',
      },
    ),
    spark: { light: [217, 119, 6], dark: [253, 224, 71] },
  },
];

/** Safe score for tier rolls (avoids NaN/undefined so gates like minScore work). */
export function normalizeGlimmerSpawnScore(glimmerScore) {
  if (typeof glimmerScore !== 'number' || !Number.isFinite(glimmerScore) || glimmerScore < 0) {
    return 0;
  }
  return Math.floor(glimmerScore);
}

export function pickGlimmerOrbTier(glimmerScore) {
  const s = normalizeGlimmerSpawnScore(glimmerScore);
  const r = Math.random();
  let cum = 0;
  for (const spec of GLIMMER_ORB_SPECIAL_TIERS) {
    if (s < spec.minScore) continue;
    cum += spec.spawnChance;
    if (r < cum) return spec;
  }
  return GLIMMER_ORB_BLUE;
}

export function orbPaletteForTheme(tier, isDark) {
  return isDark ? tier.dark : tier.light;
}

export function orbBurstParticleCount(tier) {
  return tier.id === 'blue' ? 8 : 12;
}

export function sparkRgba(tier, isDark, life, alphaScale = 1) {
  const [r, g, b] = isDark ? tier.spark.dark : tier.spark.light;
  const a = life * alphaScale * (isDark ? 0.82 : 0.78);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

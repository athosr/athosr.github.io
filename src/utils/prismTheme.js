/** Keep in sync with the inline script in index.html (first paint). */
export const PRISM_THEME_LIGHT =
  'https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-ghcolors.css';
export const PRISM_THEME_DARK =
  'https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-one-dark.css';

const LINK_ID = 'prism-theme-active';

export function syncPrismStylesheet(isDark) {
  if (typeof document === 'undefined') return;
  let el = document.getElementById(LINK_ID);
  if (!el) {
    el = document.createElement('link');
    el.rel = 'stylesheet';
    el.id = LINK_ID;
    document.head.appendChild(el);
  }
  const next = isDark ? PRISM_THEME_DARK : PRISM_THEME_LIGHT;
  if (el.getAttribute('href') !== next) {
    el.setAttribute('href', next);
  }
}

import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { runPrismHighlight } from '../utils/runPrismHighlight';

function languageFromPreChildren(children) {
  let found = null;
  React.Children.forEach(children, (child) => {
    if (found || !React.isValidElement(child)) return;
    const cls = child.props?.className;
    if (typeof cls === 'string') {
      const m = cls.match(/language-([\w-]+)/);
      if (m) found = m[1];
    }
  });
  return found;
}

function formatLanguageLabel(lang) {
  if (!lang) return 'Source';
  const map = {
    js: 'JavaScript',
    javascript: 'JavaScript',
    ts: 'TypeScript',
    typescript: 'TypeScript',
    py: 'Python',
    python: 'Python',
    sh: 'Shell',
    bash: 'Bash',
    json: 'JSON',
    css: 'CSS',
    html: 'HTML',
    md: 'Markdown',
    jsx: 'JSX',
    tsx: 'TSX',
  };
  const lower = lang.toLowerCase();
  if (map[lower]) return map[lower];
  return lang.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

const MarkdownCodeBlock = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const codeContainerRef = useRef(null);
  const { isDark } = useTheme();
  const lang = languageFromPreChildren(children);
  const langLabel = formatLanguageLabel(lang);

  useLayoutEffect(() => {
    if (!isOpen || !codeContainerRef.current) return;
    const el = codeContainerRef.current;
    runPrismHighlight(el);
    const id = requestAnimationFrame(() => runPrismHighlight(el));
    return () => cancelAnimationFrame(id);
  }, [isOpen, children, isDark]);

  return (
    <div className="markdown-code-reveal my-8 overflow-hidden rounded-xl border border-slate-200/95 bg-[#f6f8fa] shadow-lg shadow-slate-900/10 ring-1 ring-slate-900/[0.06] dark:border-slate-700/70 dark:bg-[#282c34] dark:shadow-xl dark:shadow-slate-900/20 dark:ring-white/10">
      <motion.button
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          setIsOpen((previous) => !previous);
        }}
        whileTap={{ scale: 0.995 }}
        type="button"
        aria-expanded={isOpen}
        className="group flex w-full items-center justify-between gap-3 border-b border-slate-200/90 bg-gradient-to-b from-white to-slate-50/95 px-4 py-3 text-left transition-colors hover:from-slate-50 hover:to-slate-100/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary-500 dark:border-slate-800/90 dark:from-slate-900 dark:to-slate-950 dark:hover:from-slate-900 dark:hover:to-slate-900/95"
      >
        <div className="flex min-w-0 items-center gap-3">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors group-hover:border-slate-300 group-hover:text-primary-600 dark:border-slate-700/80 dark:bg-slate-800/90 dark:text-slate-400 dark:shadow-none dark:group-hover:border-slate-600 dark:group-hover:text-primary-400"
            aria-hidden
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div className="min-w-0">
            <p className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500">
              {langLabel}
            </p>
            <p className="truncate text-sm text-slate-600 dark:text-slate-300">
              {isOpen ? 'Syntax-highlighted snippet' : 'Expand to view snippet'}
            </p>
          </div>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition-all duration-200 group-hover:border-primary-400/40 group-hover:text-primary-700 dark:border-slate-600/70 dark:bg-slate-800/80 dark:text-slate-200 dark:group-hover:border-primary-500/35 dark:group-hover:bg-slate-800 dark:group-hover:text-primary-200">
          {isOpen ? 'Hide' : 'Show'}
          <svg
            className={`h-3.5 w-3.5 text-slate-500 transition-transform duration-200 group-hover:text-primary-600 dark:text-slate-400 dark:group-hover:text-primary-300 ${isOpen ? 'rotate-180' : ''}`}
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
        </span>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.33, 1, 0.68, 1] }}
            className="overflow-hidden"
          >
            <div
              ref={codeContainerRef}
              className="border-t border-slate-200/90 bg-[#f6f8fa] dark:border-slate-800/80 dark:bg-[#282c34]"
            >
              <pre className="mb-0 overflow-x-auto px-4 py-4 md:px-5 md:py-5">{children}</pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MarkdownCodeBlock;

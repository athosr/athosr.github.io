import { createContext, useContext, useEffect, useState } from 'react';
import { syncPrismStylesheet } from '../utils/prismTheme';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('theme');
    let dark = false;
    if (stored === 'dark') dark = true;
    else if (stored === 'light') dark = false;
    else dark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
    syncPrismStylesheet(dark);
    return dark;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    syncPrismStylesheet(isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

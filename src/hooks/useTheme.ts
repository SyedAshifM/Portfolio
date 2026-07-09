import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

const storageKey = 'ashif-portfolio-theme';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';
    return window.localStorage.getItem(storageKey) === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('theme-light', theme === 'light');
    root.style.colorScheme = theme;
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
};

import { useEffect, useState } from 'react';


export function useDark() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  const updateDarkTheme = (dark: boolean) => {
    const isDarkTheme = document.documentElement.classList.contains('dark');

    if (isDarkTheme && !dark) {
      document.documentElement.classList.remove('dark');
    } else if (!isDarkTheme && dark) {
      document.documentElement.classList.add('dark');
    }

    setIsDark(document.documentElement.classList.contains('dark'));
  }

  // on mount restore from local storage
  useEffect(() => {
    const dark = localStorage.getItem('isDark') === 'true';
    updateDarkTheme(dark);
    setMounted(true);
  }, []);

  // apply when theme changes
  useEffect(() => {
    if (!mounted) return;

    try {
      localStorage.setItem('isDark', isDark ? 'true' : 'false');
    } catch {}

    updateDarkTheme(isDark);

  }, [isDark, mounted]);

  return { isDark, setIsDark, mounted };
}

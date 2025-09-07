import { useEffect, useState } from 'react';


export function useDark() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  // init in on mount
  useEffect(() => {
    setMounted(true);
    const dark = localStorage.getItem('isDark') === 'true';
    setIsDark(dark);
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  // apply when theme changes
  useEffect(() => {
    try {
      localStorage.setItem('isDark', isDark ? 'true' : 'false');
    } catch {}

    document.documentElement.classList.toggle('dark', isDark);

  }, [isDark]);

  return { isDark, setIsDark, mounted };
}

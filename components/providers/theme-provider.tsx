'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useThemeStore } from '@/lib/store';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    const storedTheme = localStorage.getItem('sahla-theme') || 'light';
    setTheme(storedTheme as 'light' | 'dark');
    setMounted(true);
  }, [setTheme]);

  useEffect(() => {
    if (!mounted) return;

    const htmlElement = document.documentElement;
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    localStorage.setItem('sahla-theme', theme);
  }, [theme, mounted]);

  if (!mounted) return null;

  return <>{children}</>;
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

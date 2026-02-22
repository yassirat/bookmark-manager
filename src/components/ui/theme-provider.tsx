'use client';

import { useThemeStore } from '@/store/theme';
import { ReactNode, useEffect } from 'react';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return <> {children}</>;
}

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface ThemeProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeProps>()(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () =>
        set((state) => {
          const newTheme = state.theme === 'light' ? 'dark' : 'light';
          return { theme: newTheme };
        }),
    }),
    { name: 'theme-storage' },
  ),
);

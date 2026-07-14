import { useShowStore } from '@/store/show-form';
import { useThemeStore } from '@/store/theme';
import { BookmarkIcon, PlusIcon, ThemeIcon } from './ui/svg-icons';

export default function Header() {
  const { showForm } = useShowStore();
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <header className="p-4 bg-neutral-50 dark:bg-neutral-950 dark:text-white sticky top-0">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* First Block */}
        <div className="flex items-center gap-2">
          <BookmarkIcon />
          <span className="font-bold hidden md:block">Bookmark Manager</span>
        </div>

        {/* Second Block */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="bg-[#273f4f] text-white p-1 rounded-md transition-colors hover:bg-[rgba(39,63,79,.90)]"
            onClick={showForm}
            title="Open the bookmark form"
            aria-label="Open the bookmark form">
            <PlusIcon />
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Change the theme">
            <ThemeIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

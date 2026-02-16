import { useShowStore } from '@/store/show-form';
import { BookmarkIcon, PlusIcon } from './ui/svg-icons';

export default function Header() {
  const { showForm } = useShowStore();

  return (
    <header className="p-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* First Block */}
        <div className="flex items-center gap-2">
          <BookmarkIcon />
          <span className="font-bold hidden md:block">Bookmark Manager</span>
        </div>

        {/* Second Block */}
        <button
          type="button"
          className="bg-[#273f4f] text-white  flex items-center gap-2 py-2 px-4 rounded-md transition-colors hover:bg-[rgba(39,63,79,.95)]"
          onClick={showForm}>
          <PlusIcon />
          <span className="text-xs font-medium lg:text-sm xl:text-base">
            Add Bookmark
          </span>
        </button>
      </div>
    </header>
  );
}

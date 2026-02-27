import { useBook, useDeleteBook } from '@/store/bookmark';
import { useShowStore } from '@/store/show-form';
import Image from 'next/image';
import Link from 'next/link';
import BookForm from './book-form';
import { CalendarIcon, DeleteIcon, PlusIcon } from './ui/svg-icons';

export default function Hero() {
  const books = useBook();
  const deleteBook = useDeleteBook();
  const show = useShowStore((state) => state.show);
  const showForm = useShowStore((state) => state.showForm);

  return (
    <article className="bg-blue-50 py-6 px-8 dark:bg-neutral-900 dark:text-white">
      {show && <BookForm />}
      {books.length == 0 ? (
        <div className="h-full grid place-items-center place-content-center gap-4">
          <p className="font-medium text-xl text-center">
            You don’t have bookmarks yet. Add your first one.
          </p>
          <button
            type="button"
            className="bg-[#273f4f] text-white flex items-center gap-2 p-2 rounded-md transition-colors hover:bg-[rgba(39,63,79,.90)]"
            onClick={showForm}
            aria-label="Open the bookmark form">
            <PlusIcon />
            <span className="text-xs font-medium">Add Bookmark</span>
          </button>
        </div>
      ) : (
        <section className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 place-items-center">
            {/* First grid */}
            {books.map((book) => (
              <div
                className="w-70 h-56 rounded-lg bg-white/80 dark:bg-neutral-900/80 dark:text-white shadow flex flex-col justify-between gap-4"
                style={{
                  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                  animation: 'show .4s ease-in-out',
                }}
                key={book.id}>
                <div className="flex items-center justify-between border-b-2 border-b-gray-300 py-4 px-4 dark:border-b-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="shadow">
                      <Image
                        src={book.faviconUrl}
                        alt={`${book.name}'s favicon`}
                        className="text-xs overflow-hidden rounded-sm"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="grid place-content-center">
                      <h3
                        className="font-semibold text-lg lg:text-base"
                        style={{ lineHeight: 1.2 }}>
                        {book.name}
                      </h3>
                      <Link
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${book.name} (opens in new tab)`}
                        className="text-sm text-gray-500 dark:text-gray-300 transition-colors hover:text-gray-900 dark:hover:text-white">
                        {book.link.length > 50
                          ? `${book.link.replace(/^https?:\/\//, '').slice(0, 20)}...`
                          : book.link.replace(/^https?:\/\//, '')}
                      </Link>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => deleteBook(book.id)}
                    aria-label="Delete the bookmark">
                    <DeleteIcon />
                  </button>
                </div>
                {/* Second Grid */}
                <div className="px-4">
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                    {book.description.length < 80
                      ? book.description
                      : `${book.description.slice(0, 70)}...`}
                  </p>
                </div>

                {/* Third Grid */}
                <div className="px-4 py-2 flex items-center gap-2 border-t-2 border-t-gray-300 dark:border-t-gray-700">
                  <CalendarIcon />
                  <p className="font-medium text-xs text-gray-500 dark:text-gray-400">
                    {new Date(book.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

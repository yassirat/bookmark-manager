import { useBook, useDeleteBook } from '@/store/bookmark';
import { useShowStore } from '@/store/show-form';
import Image from 'next/image';
import BookForm from './book-form';
import { DeleteIcon } from './ui/svg-icons';

export default function Hero() {
  const books = useBook();
  const deleteBook = useDeleteBook();
  const { show } = useShowStore();

  const time = new Date();

  return (
    <article className="bg-blue-50 py-6 px-8">
      {show && <BookForm />}
      {books.length == 0 ? (
        <p className="font-medium text-xl h-full flex items-center justify-center">
          You don’t have bookmarks yet. Add your first one.
        </p>
      ) : (
        <section className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 place-items-center">
            {/* First grid */}
            {books.map((book) => (
              <div
                className="w-64 h-56 rounded-lg bg-white/80 shadow flex flex-col justify-between gap-4"
                style={{
                  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                }}
                key={book.id}>
                <div className="flex items-center justify-between border-b-2 border-b-gray-300 py-4 px-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={book.faviconUrl}
                      alt={`${book.name}'s favicon`}
                      className="text-xs shadow overflow-hidden bg-white rounded-md p-0.5"
                      width={40}
                      height={40}
                    />
                    <div className="grid place-content-center">
                      <h3
                        className="font-semibold text-lg md:text-base lg:text-xl"
                        style={{ lineHeight: 1.2 }}>
                        {book.name}
                      </h3>
                      <a
                        href={book.link}
                        target="_blank"
                        className="text-sm text-gray-500 font-medium transition-colors hover:text-gray-900">
                        {book.link.slice(8, length - 1)}
                      </a>
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
                  <p className="text-gray-600 text-sm font-medium">
                    {book.description.length < 80
                      ? book.description
                      : `${book.description.slice(0, 70)}...`}
                  </p>
                </div>

                {/* Third Grid */}
                <div className="px-4 py-2 border-t-2 border-t-gray-300">
                  <p className="font-medium text-sm text-gray-500">
                    {time.getDate()}{' '}
                    {time.toLocaleString('en-US', { month: 'short' })}
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

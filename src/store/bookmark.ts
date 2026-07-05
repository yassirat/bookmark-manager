import { toast } from 'sonner';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface BookEntry {
  name: string;
  id: string;
  link: string;
  faviconUrl: string;
  createdAt: string;
}

type Actions = {
  books: BookEntry[];
  addBook: (name: string, link: string) => void;
  deleteBook: (id: string) => void;
};

const useBookStore = create<Actions>()(
  persist(
    (set) => ({
      books: [],
      show: false,

      addBook: (name, link) => {
        // Extract domain from URL
        let domain = link;
        let faviconUrl = '';

        try {
          const urlObj = new URL(
            link.startsWith('http') ? link : `https://${link}`,
          );
          domain = urlObj.hostname;
          faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
        } catch (error) {
          console.error('Invalid URL', error);
          // Use a default favicon or empty string
          faviconUrl = 'https://via.placeholder.com/128?text=No+Icon';
        }

        const newBook: BookEntry = {
          name: name.trim(),
          link: link.trim(),
          faviconUrl,
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
        };

        set((state) => ({
          books: [...state.books, newBook],
        }));
      },

      deleteBook: (id) => {
        set((state) => ({
          books: state.books.filter((book) => book.id !== id),
        }));
        toast.success('Bookmark deleted successfully!');
      },
    }),
    { name: 'book-storage' },
  ),
);

export const useBook = () => useBookStore((state) => state.books);
export const useAddBook = () => useBookStore((state) => state.addBook);
export const useDeleteBook = () => useBookStore((state) => state.deleteBook);

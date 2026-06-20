'use client';

import { useAddBook } from '@/store/bookmark';
import { useShowStore } from '@/store/show-form';
import React, { useState } from 'react';
import { toast } from 'sonner';

export default function BookForm() {
  const addBook = useAddBook();
  const { showForm } = useShowStore();

  const [book, setBook] = useState('');
  const [link, setLink] = useState('');

  const formSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    addBook(book, link);
    showForm();
    toast.success('Bookmark added successfully!');
    // Clear form
    setBook('');
    setLink('');
  };

  return (
    <div className="fixed left-0 top-0 z-50 flex min-h-dvh w-full items-center justify-center px-8 backdrop-blur bg-black/50">
      <button
        type="button"
        className="transition-colors absolute right-4 top-40 rounded-full bg-[rgb(39,63,79)] p-1 duration-200 ease-in-out hover:bg-[rgba(39,63,79,.96)] lg:right-72 lg:p-2"
        style={{ animation: 'fade .4s ease-in-out' }}
        onClick={showForm}
        aria-label="Close the book form">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-7 text-white">
          <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
        </svg>
      </button>
      <form
        onSubmit={formSubmit}
        className="mx-auto flex flex-col items-center justify-center gap-4 lg:max-w-xl w-full"
        style={{ animation: 'fade .5s ease-in-out' }}>
        <input
          type="text"
          className="w-full rounded bg-slate-200 dark:bg-slate-950 px-2 py-1 text-sm font-medium  shadow-[0_0_2px] shadow-slate-400 transition-all duration-200 ease-in focus:shadow-[0_0_8px] focus:outline-none lg:px-3 lg:py-2 dark:text-white"
          value={book}
          onChange={(e) => setBook(e.target.value)}
          placeholder="Enter the name of the website"
          required
          autoFocus
        />
        <input
          type="text"
          className="w-full rounded bg-slate-200 dark:bg-slate-950 px-2 py-1 text-sm font-medium  shadow-[0_0_2px] shadow-slate-400 transition-all duration-200 ease-in focus:shadow-[0_0_8px] focus:outline-none lg:px-3 lg:py-2 dark:text-white"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Enter the link of the website"
          required
          autoFocus
        />

        <button
          type="submit"
          className="bg-[#FE7743] text-black py-1 px-4 rounded font-medium text-sm lg:text-base transition-colors hover:bg-[rgba(254,119,67,.85)]"
          aria-label="Submit the book form">
          Submit
        </button>
      </form>
    </div>
  );
}

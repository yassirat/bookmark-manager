'use client';

import Header from '@/components/header';
import Hero from '@/components/hero';
import { Toaster } from 'sonner';

export default function Home() {
  return (
    <main className="font-sans">
      <section className="min-h-dvh grid grid-rows-[auto_1fr]">
        <Header />
        <Hero />
      </section>
      <Toaster position="top-right" richColors closeButton />
    </main>
  );
}

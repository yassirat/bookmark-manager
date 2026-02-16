import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const mainFont = Roboto({
  variable: '--font-main',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bookmark Manager',
  description: 'A place where you can save all your preferred websites.',
  keywords: ['Bookmark Manager, link saving tool'],

  openGraph: {
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Bookmark Manager',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    title: 'Bookmark Manager',
    description: 'Bookmark Manager',
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mainFont.variable} antialiased`}>{children}</body>
    </html>
  );
}

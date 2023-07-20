import type { Metadata } from 'next';
import { Footer, Navbar } from '@/components';

import './globals.css';

export const metadata: Metadata = {
  title: 'Cars-arket',
  description: 'Created by Nazar',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative flex flex-col min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

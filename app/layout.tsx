import './globals.css';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Weight } from 'lucide-react';

const lato = Lato({subsets: ["latin"], weight: ['300','100','400','700','900']})

export const metadata: Metadata = {
  title: 'Jay Research | Clinical Research Software Solutions',
  description: 'Advanced clinical research software and technology solutions using machine learning and modular architecture. All development handled in-house.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lato.className} min-h-screen flex flex-col`}>
        <Header />
        <div className="pt-16 flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
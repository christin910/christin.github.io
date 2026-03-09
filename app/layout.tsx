import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Digital Sanctuary',
  description: 'A personal portfolio-blog hybrid',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="bg-[#050505] text-[#FAFAFA] font-sans antialiased selection:bg-zinc-800 selection:text-zinc-100 min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

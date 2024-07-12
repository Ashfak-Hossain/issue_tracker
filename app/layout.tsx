import type { Metadata } from 'next';
import { Theme } from '@radix-ui/themes';
import './theme.config.css';
import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from '@/components/NavBar';
import '@radix-ui/themes/styles.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Issue Tracker App',
  description: 'A simple issue tracker app built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Theme accentColor="violet">
          <NavBar />
          <main className="p-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}

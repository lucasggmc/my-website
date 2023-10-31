import { Roboto, Inter } from 'next/font/google';
import { Providers } from './providers';
import GlobalStyles from '@/styles/global';

export const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const inter = Inter({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Home | Lucas Carneiro',
  description: 'lucascarneiro.com',
  icons: [
    {
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${inter.variable}`}>
      <body>
        <Providers>
          <GlobalStyles />
          {children}
        </Providers>
      </body>
    </html>
  );
}

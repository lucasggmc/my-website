'use client';
import { PropsWithChildren } from 'react';

import GlobalStyles from '@/styles/global';
import TranslationProvider from '@/contexts/TranslationContext';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'react-hot-toast';

export function Providers({ children }: PropsWithChildren) {
  return (
    <TranslationProvider>
      <NextTopLoader
        color="#33b53d"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #33b53d,0 0 5px #33b53d"
      />
      <Toaster />
      <GlobalStyles />
      {children}
    </TranslationProvider>
  );
}

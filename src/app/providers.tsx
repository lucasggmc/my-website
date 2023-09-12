'use client';
import { PropsWithChildren } from 'react';

import GlobalStyles from '@/styles/global';
import TranslationProvider from '@/contexts/TranslationContext';
import NextTopLoader from 'nextjs-toploader';

export function Providers({ children }: PropsWithChildren) {
  return (
    <TranslationProvider>
      <NextTopLoader
        color="#de2c62"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #de2c62,0 0 5px #de2c62"
      />
      <GlobalStyles />
      {children}
    </TranslationProvider>
  );
}

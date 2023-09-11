'use client';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import TranslationProvider from '@/contexts/TranslationContext';

export default function Home() {
  return (
    <TranslationProvider>
      <Header />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </TranslationProvider>
  );
}

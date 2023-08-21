import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

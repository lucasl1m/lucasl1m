import { Header, Footer } from '@/components/layout';
import { Main } from './components/Main';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Skills } from './components/Skills';
import { Project } from './components/Projects';

export function Home() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <Header />

      <img
        src="/assets/png/shape.png"
        alt=""
        className="absolute -top-[15%] -right-[35%] pointer-events-none [opacity:var(--shape-opacity)]"
      />

      <div className="w-full flex flex-col items-center justify-center px-16 gap-24 max-md:gap-14">
        <Main />
        <Experience />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}


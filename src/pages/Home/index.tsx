import { Header, Footer } from '@/components/layout';
import { Main } from './components/Main';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Project } from './components/Projects';

export function Home() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <Header />

      <div className="w-full lg:w-3/4 mx-auto flex flex-col items-center justify-center px-16 gap-16 max-md:px-4 max-md:gap-10">
        <Main />
        <Experience />
        <Skills />
        <Project />
        <Footer />
      </div>
    </div>
  );
}


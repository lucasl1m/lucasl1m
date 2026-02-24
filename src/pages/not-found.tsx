import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-background pb-10">
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src="/assets/svg/astronaut.svg"
          alt=""
          className="max-w-md w-full h-auto object-contain opacity-80"
        />
      </div>
      <NavLink to="/" className="relative z-10 mt-4">
        <Button>Voltar para Home</Button>
      </NavLink>
    </div>
  );
}

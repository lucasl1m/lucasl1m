import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function NotFound() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <div>
          <p className="text-sm font-medium text-caption">Erro 404</p>
          <h1 className="mt-2 text-2xl font-semibold text-whiteText">
            Página não encontrada
          </h1>
          <p className="mt-2 text-sm text-body">
            A página que você está tentando acessar não existe ou foi movida.
          </p>
        </div>

        <NavLink to="/">
          <Button type="button">Voltar para a home</Button>
        </NavLink>
      </div>
    </div>
  );
}

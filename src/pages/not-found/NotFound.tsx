import { Link } from 'react-router-dom';
import { ButtonCommon } from '../../components/button';

export const NotFound = () => {
  return (
    <div className="w-screen h-screen bg-graypersonal flex items-center justify-center flex-col">
      <h1 className="text-greenpersonal text-2xl mb-4 font-semibold">404: Página não encontrada</h1>
      <Link to={'/'}>
        <ButtonCommon>Voltar</ButtonCommon>
      </Link>
    </div>
  );
};

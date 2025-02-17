import { TopMenu } from '../../components/menu/top-menu/TopMenu';
import { MiddleMenu } from '../../components/menu/middle-menu/MiddleMenu';
import { ButtonCommon } from '../../components/button/ButtonCommon';
import { CardRoute } from '../../components/card-route';
import { CardPassengers } from '../../components/card-passengers/CardPassengers';

function handleTurma() {
  console.log('Turma');
}
export const Turma: React.FC = () => {
  return (
    <div className="h-screen flex flex-col bg-graypersonal">
      <div className="bg-greenpersonal rounded-b-3xl">
        <TopMenu />
        <MiddleMenu />
      </div>
      <div className="m-4">
        <CardRoute />
      </div>
      <div className="justify-center flex mb-4">
        <ButtonCommon onClick={handleTurma}>Iniciar Rota</ButtonCommon>
      </div>
      <div className="mx-4 mb-4 p-2 overflow-y-auto">
        <CardPassengers/>
      </div>
    </div>
  );
};

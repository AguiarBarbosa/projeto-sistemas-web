


function Left() {
  function Label({ span, label }: { span: string; label: string }) {
    return (
      <div className="flex flex-col font-semibold text-nowrap">
        <span className="text-slate-500 text-sm font-semibold">{span}</span>
        {label}
      </div>
    );
  }
  return (
    <div className="divide-y-2 divide-dashed divide-slate-400 p-2 col-span-5">
      <Label span="De" label="Cidade A" />
      <Label span="Para" label="Cidade B" />
    </div>
  );
}

function Right() {
  return (
    <img src="src\assets\images\clock.png" alt="" className="self-center p-0.5"/>
  );
}
function Card() {
  return (
    <div className="grid grid-cols-6 bg-white text-black w-full rounded-2xl">
      <Left />
      <Right />
    </div>
  );
}
function UserAndName(){
  return(
    <div className="flex flex-col">
    <img src="src\assets\images\user.png" alt="" className="self-center bg-white rounded-full" />
    <div className="self-center text-white font-semibold">Motorista</div>
    </div>
  )
}

export const MiddleMenu: React.FC = () => {
  return (
    <div className="px-4 pb-4 grid grid-cols-3">
      <UserAndName/>
      <div className="flex flex-col col-span-2 ml-4">
        <div className='text-white font-semibold'>Partida: Agora</div>
        <div className="col-span-2">
        <Card />
        </div>
      </div>
    </div>
  );
};

export const CardRoute: React.FC = () => {
  return (
    <div className="w-auto bg-white grid grid-cols-2 p-2 divide-x rounded-4xl">
      <div className="tracking-tight leading-none flex">
        <div className="div">
          <span className="block mx-2">Passageiros</span>
          <span className="block mx-2">Confirmados:</span>
        </div>
        <div className="flex self-center justify-self-center">
            <span className="mx-2 font-bold text-greenpersonal text-xl">09</span>
        </div>
      </div>
      <div className="tracking-tight leading-none flex">
        <div className="div">
          <span className="block mx-2">Passageiros</span>
          <span className="block mx-2">Pendentes:</span>
        </div>
        <div className="flex self-center justify-self-center">
            <span className="mx-2 font-bold text-slate-600 text-xl">04</span>
        </div>
      </div>
    </div>
  );
};

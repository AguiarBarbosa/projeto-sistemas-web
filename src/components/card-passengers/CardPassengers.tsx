export const CardPassengers: React.FC = () => {

  const passengers = [
    { name: 'Rodrigo Silva', address: 'Rua Antônio Carlos, 100', time: '30 m' },
    { name: 'Maria Souza', address: 'Avenida Brasil, 456', time: '1 h 15 m' },
    { name: 'Carlos Oliveira', address: 'Rua das Flores, 789', time: '45 m' },
    { name: 'Ana Pereira', address: 'Rua dos Três Corações, 101', time: '20 m' },
    { name: 'Lucas Santos', address: 'Rua São João, 202', time: '1 h 30 m' },
    { name: 'Olivia Costa', address: 'Avenida Paulista, 303', time: '2 h 10 m' },
    { name: 'Sophia Almeida', address: 'Rua da Liberdade, 404', time: '1 h 23 m' },
    { name: 'Ethan Lima', address: 'Rua das Palmeiras, 505', time: "33m" },
  ];

  return (
    <>
      {passengers.map((passenger, index) => (
        <div key={index} className="bg-white mb-1 p-2 grid grid-cols-5 rounded-2xl">
          <div className="mr-2 flex flex-col items-center">
            <img
              src="src/assets/images/user.png"
              alt=""
              className=" bg-slate-100 rounded-full h-auto"
            />
            <div className="text-sm font-semibold truncate max-w-full">
              {passenger.name.split(" ")[0]}
            </div>
          </div>
          <div className="grid grid-rows-3 justify-between flex-grow col-span-4 ">
            <div className="text-slate-400 font-semibold mb-auto row-span-2 line-clamp-2">Endereço: {passenger.address}</div>
            <div className="text-slate-400 font-semibold mt-auto truncate text-nowrap">Tempo de Chegada: {passenger.time}</div>
          </div>
        </div>
      ))}
    </>
  );
};
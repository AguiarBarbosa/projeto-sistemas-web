export const CardPassengers: React.FC = () => {
    const passengers = [
      { name: 'João Silva', address: 'Rua Antônio Carlos dsfsaf sdafsafasd sdafsfd asdfsdfsad afsadfs, 100', time: '30 m' },
      { name: 'Maria Souza', address: 'Avenida Brasil, 456', time: '1 h 15 m' },
      { name: 'Carlos Oliveira', address: 'Rua das Flores, 789', time: '45 m' },
      { name: 'Ana Pereira', address: 'Rua dos Três Corações, 101', time: '20 m' },
      { name: 'Lucas Santos', address: 'Rua São João, 202', time: '1 h 30 m' },
      { name: 'Olivia Costa', address: 'Avenida Paulista, 303', time: '2 h 10 m' },
      { name: 'Sophia Almeida', address: 'Rua da Liberdade, 404', time: '1 h 23 m' },
      { name: 'Ethan Lima', address: 'Rua das Palmeiras, 505', time: '35 m' },
    ];
  
    return (
        <>
          {passengers.map((passenger, index) => (
            <div key={index} className="bg-white my-1 p-2 rounded-2xl flex max-h-[100px]">
              <div className="mr-2">
                <img
                  src="src/assets/images/user.png"
                  alt=""
                  className="w-16 bg-slate-100 rounded-full"
                />
                <div className="justify-self-center font-semibold">
                  {passenger.name.split(' ')[0]}
                </div>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div className="text-slate-400 font-semibold mb-auto">Endereço: {passenger.address}</div>
                <div className="text-slate-400 font-semibold mt-auto">Tempo de Chegada: {passenger.time}</div>
              </div>
            </div>
          ))}
        </>
      );      
  };
  
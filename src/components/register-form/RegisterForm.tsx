import { useState } from 'react';
import { IRegister } from '../../interfaces/IRegister';
import { ButtonCommon } from '../../components/button';
import { toast, ToastContainer } from 'react-toastify';

export const RegisterForm = () => {
    const [formData, setFormData] = useState<IRegister>({
      name: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      cpf: '',
      phone: '',
      address: '',
      city: '',
      state: '',
    });
  
    const [error, setError] = useState('');
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
  
      if (name === 'phone') {
        let cleaned = value.replace(/\D/g, '');
  
        let formattedPhone = '';
        if (cleaned.length <= 2) {
          formattedPhone = `(${cleaned}`;
        } else if (cleaned.length <= 3) {
          formattedPhone = `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
        } else if (cleaned.length <= 7) {
          formattedPhone = `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 3)} ${cleaned.slice(3)}`;
        } else {
          formattedPhone = `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 3)} ${cleaned.slice(3, 7)}-${cleaned.slice(7, 11)}`;
        }
  
        setFormData({ ...formData, phone: formattedPhone });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setError('');
  
      if (formData.password !== formData.confirmPassword) {
        toast.error('As senhas não coincidem', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        return;
      }
  
      if (formData.password === '') {
        toast.error('A senha não pode estar vazia', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        return;
      }
  
      console.log('Dados enviados:', formData);
    };
  
    return (
      <div className="w-screen mx-auto  p-6 h-screen flex flex-col justify-between">
        <div>
          <img src="src\assets\images\Aguiar_logo.png" alt="" className='p-4 mb-4'/>
          <h2 className="text-2xl font-bold text-center mb-4">Cadastro</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                className="p-2 border rounded-lg w-full focus:outline-greenpersonal focus:bg-green-50"
                required
              />
              <input
                type="text"
                name="lastname"
                placeholder="Sobrenome"
                value={formData.lastname}
                onChange={handleChange}
                className="p-2 border rounded-lg w-full focus:outline-greenpersonal focus:bg-green-50"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border rounded-lg w-full focus:outline-greenpersonal focus:bg-green-50"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="password"
                name="password"
                placeholder="Senha"
                value={formData.password}
                onChange={handleChange}
                className="p-2 border rounded-lg w-full focus:outline-greenpersonal focus:bg-green-50"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirmar Senha"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="p-2 border rounded-lg w-full focus:outline-greenpersonal focus:bg-green-50"
                required
              />
            </div>
            <input
              type="text"
              name="cpf"
              placeholder="CPF"
              value={formData.cpf}
              onChange={handleChange}
              className="p-2 border rounded-lg w-full focus:outline-greenpersonal focus:bg-green-50"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Telefone"
              value={formData.phone}
              onChange={handleChange}
              className="p-2 border rounded-lg w-full focus:outline-greenpersonal focus:bg-green-50"
              required
            />
            <div className="justify-center flex">
              <ButtonCommon onClick={handleSubmit}>Cadastrar</ButtonCommon>
            </div>
          </form>
        </div>
  
        <div className="text-sm font-semibold text-center mt-4">
          Ao usar esse aplicativo, você concorda com os{' '}
          <span className="underline">Termos de Uso</span> e{' '}
          <span className="underline">Política de privacidade</span>
        </div>
  
        <ToastContainer />
      </div>
    );
  };
  
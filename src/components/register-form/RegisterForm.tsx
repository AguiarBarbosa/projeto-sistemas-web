import { useState } from 'react';
import { IRegister } from '../../interfaces/IRegister';
import { ButtonCommon } from '../../components/button';
import { toast, ToastContainer } from 'react-toastify';

export const RegisterForm = () => {
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value })); 
  };

  const [formData, setFormData] = useState<IRegister>({
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    cpf: '',
    phone: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      let cleaned = value.replace(/\D/g, '');

      let formattedPhone = '';
      if (cleaned.length === 0) {
        formattedPhone = '';
      } else if (cleaned.length <= 2) {
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
  const [cpf, setCpf] = useState('');

  const formatCPF = (value: string) => {
    value = value.replace(/\D/g, '').slice(0, 11);

    if (value.length > 9) {
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (value.length > 6) {
      return value.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else if (value.length > 3) {
      return value.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    }
    return value;
  };

  const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCpf = formatCPF(event.target.value);
    setCpf(formattedCpf);
    setFormData((prev) => ({ ...prev, cpf: formattedCpf })); 
  };
  return (
    <div className="w-screen mx-auto  p-6 h-screen flex flex-col justify-between">
      <div>
        <img
          src="src\assets\images\Aguiar_logo.png"
          alt=""
          className="p-4 mb-4"
        />
        <h2 className="text-2xl font-bold text-center mb-4">Cadastro</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-500"
              >
                <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
              </svg>

              <input
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                className="p-2 pl-10 border rounded-lg w-full focus:outline-greenpersonal focus:bg-green-50"
                required
              />
            </div>

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

          <div className="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M2.106 6.447A2 2 0 0 0 1 8.237V16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.236a2 2 0 0 0-1.106-1.789l-7-3.5a2 2 0 0 0-1.788 0l-7 3.5Zm1.48 4.007a.75.75 0 0 0-.671 1.342l5.855 2.928a2.75 2.75 0 0 0 2.46 0l5.852-2.927a.75.75 0 1 0-.67-1.341l-5.853 2.926a1.25 1.25 0 0 1-1.118 0l-5.856-2.928Z"
                clipRule="evenodd"
              />
            </svg>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 pl-10 border rounded-lg w-full focus:outline-greenpersonal focus:bg-green-50"
              required
            />
          </div>

          <div className="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M8 7a5 5 0 1 1 3.61 4.804l-1.903 1.903A1 1 0 0 1 9 14H8v1a1 1 0 0 1-1 1H6v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 .293-.707L8.196 8.39A5.002 5.002 0 0 1 8 7Zm5-3a.75.75 0 0 0 0 1.5A1.5 1.5 0 0 1 14.5 7 .75.75 0 0 0 16 7a3 3 0 0 0-3-3Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type={passwordVisibility ? 'text' : 'password'}
              name="password"
              placeholder="Senha"
              value={formData.password}
              onChange={handlePasswordChange}
              className="p-2 pl-10 pr-12 border rounded-lg w-full focus:outline-greenpersonal focus:bg-green-50 overflow-hidden text-ellipsis"
              required
            />
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                viewBox="0 0 20 20"
                stroke="currentColor"
                width="20"
                height="20"
              >
                <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path
                  fillRule="evenodd"
                  d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                  clipRule="evenodd"
                />
              </svg>
            
          </div>
          <div className="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M8 7a5 5 0 1 1 3.61 4.804l-1.903 1.903A1 1 0 0 1 9 14H8v1a1 1 0 0 1-1 1H6v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 .293-.707L8.196 8.39A5.002 5.002 0 0 1 8 7Zm5-3a.75.75 0 0 0 0 1.5A1.5 1.5 0 0 1 14.5 7 .75.75 0 0 0 16 7a3 3 0 0 0-3-3Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type={passwordVisibility ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirmar"
              value={formData.confirmPassword}
              onChange={handlePasswordChange}
              className="p-2 pl-10 pr-12 border rounded-lg w-full focus:outline-greenpersonal focus:bg-green-50 overflow-hidden text-ellipsis"
              required
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              viewBox="0 0 20 20"
              stroke="currentColor"
              width="20"
              height="20"
            >
              <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <path
                fillRule="evenodd"
                d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M1 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6Zm4 1.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2 3a4 4 0 0 0-3.665 2.395.75.75 0 0 0 .416 1A8.98 8.98 0 0 0 7 14.5a8.98 8.98 0 0 0 3.249-.604.75.75 0 0 0 .416-1.001A4.001 4.001 0 0 0 7 10.5Zm5-3.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm0 6.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm.75-4a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
                clipRule="evenodd"
              />
            </svg>

            <input
              type="text"
              name="cpf"
              placeholder="CPF"
              value={cpf}
              onChange={handleCPFChange}
              className="p-2 pl-10 border rounded-lg w-full focus:outline-greenpersonal focus:bg-green-50"
              required
            />
          </div>
          <div className="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                clipRule="evenodd"
              />
            </svg>

            <input
              type="text"
              name="phone"
              placeholder="Telefone"
              value={formData.phone}
              onChange={handleChange}
              className="p-2 pl-10 border rounded-lg w-full focus:outline-greenpersonal focus:bg-green-50"
              required
            />
          </div>
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

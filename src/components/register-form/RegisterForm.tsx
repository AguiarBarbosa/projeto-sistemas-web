import { useState } from 'react';
import { IRegister } from '../../interfaces/IRegister';
import { ButtonCommon } from '../../components/button';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
  const [error, setError] = useState('');
  const [cpf, setCpf] = useState('');
  const [formData, setFormData] = useState<IRegister>({
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    cpf: '',
    phone: '',
  });
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

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

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (Object.values(formData).some((value) => !value)) {
      toast.error('Todos os campos são obrigatórios', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error('E-mail inválido.', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('As senhas não coincidem', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    if (formData.cpf.length < 11) {
      toast.error('CPF inválido', { position: 'top-right', autoClose: 3000 });
      return;
    }

    if (formData.phone.length < 16) {
      toast.error('Telefone inválido', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    console.log('Dados enviados:', formData);
    navigate('/turma');
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
                className={`p-2 pl-10 border rounded-lg w-full focus:outline-greenpersonal focus:bg-green-50 ${formData.name ? 'bg-green-50 border-greenpersonal' : ''}`}
                required
              />
            </div>

            <input
              type="text"
              name="lastname"
              placeholder="Sobrenome"
              value={formData.lastname}
              onChange={handleChange}
              className={`p-2 border rounded-lg w-full focus:outline-none focus:outline-greenpersonal focus:bg-green-50 ${formData.lastname ? 'bg-green-50' : ''}`}
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
              className={`p-2 pl-10 border rounded-lg w-full focus:outline-greenpersonal focus:bg-green-50 ${formData.email ? 'bg-green-50 border-greenpersonal' : ''}`}
             
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
              className={`p-2 pl-10 border rounded-lg w-full focus:outline-greenpersonal focus:bg-green-50 ${formData.password ? 'bg-green-50 border-greenpersonal' : ''}`}

              required
            />
            {passwordVisibility ? (
              <svg
                onClick={togglePasswordVisibility}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                width="20"
                height="20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                onClick={togglePasswordVisibility}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                width="20"
                height="20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
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
              placeholder="Confirmar Senha"
              value={formData.confirmPassword}
              onChange={handlePasswordChange}
              className={`p-2 pl-10 border rounded-lg w-full focus:outline-greenpersonal focus:bg-green-50 ${formData.confirmPassword ? 'bg-green-50 border-greenpersonal' : ''}`}

              required
            />

            {passwordVisibility ? (
              <svg
                onClick={togglePasswordVisibility}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                width="20"
                height="20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                onClick={togglePasswordVisibility}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                width="20"
                height="20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
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
              className={`p-2 pl-10 border rounded-lg w-full focus:outline-greenpersonal focus:bg-green-50 ${formData.cpf ? 'bg-green-50 border-greenpersonal' : ''}`}

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
              className={`p-2 pl-10 border rounded-lg w-full focus:outline-greenpersonal focus:bg-green-50 ${formData.phone ? 'bg-green-50 border-greenpersonal' : ''}`}

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

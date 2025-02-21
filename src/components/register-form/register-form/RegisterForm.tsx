import { useState } from 'react';
import { IRegister } from '../../../interfaces/IRegister';
import { ButtonCommon } from '../../button';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { DataCpf } from '../register-components/DataCpf';
import { DataPassword } from '../register-components/DataPassword';
import { DataConfirmPassword } from '../register-components/DataConfirmPassword';
import { DataEmail } from '../register-components/DataEmail';
import { DataName } from '../register-components/DataName';
import { DataLastName } from '../register-components/DataLastName';

export const RegisterForm = () => {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<IRegister>({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    cpf: '',
    phone: '',
  });
  const navigate = useNavigate();

  
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
    // Verifica se algum campo está vazio
    if (Object.values(formData).some((value) => !value)) {
      toast.error('Todos os campos são obrigatórios', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }
  
    // Previne o comportamento padrão do formulário
    e.preventDefault();
    setError('');
  
    // Função para validar o e-mail
    const validateEmail = (email: string): boolean => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    // Verifica se o e-mail é válido
    if (!validateEmail(formData.email)) {
      toast.error('E-mail inválido.', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }
  
    // Verifica se as senhas coincidem
    if (formData.password !== formData.confirmPassword) {
      toast.error('As senhas não coincidem', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }
  
    // Valida o CPF e remove pontos e hífen
    const cleanedCpf = formData.cpf.replace(/[^\d]/g, ''); // Remove tudo que não for número
    if (cleanedCpf.length < 11) {
      toast.error('CPF inválido', { position: 'top-right', autoClose: 3000 });
      return;
    }
  
    // Valida o telefone
    if (formData.phone.length < 16) {
      toast.error('Telefone inválido', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }
  
    // Exibe os dados enviados no console
    console.log('Dados enviados:', { ...formData, cpf: cleanedCpf });
    
    // Redireciona para outra página após a validação
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
              <DataName
                name={formData.name}
                onChange={(name) =>
                  setFormData((prevData) => ({ ...prevData, name }))
                }
              />
            </div>
            <DataLastName
              lastName={formData.lastName}
              onChange={(lastName) =>
                setFormData((prevData) => ({ ...prevData, lastName }))
              }
            />
          </div>

          <div className="relative w-full">
            <DataEmail
              email={formData.email}
              onChange={(email) =>
                setFormData((prevData) => ({ ...prevData, email }))
              }
            />
          </div>

          <div className="relative w-full">
            <DataPassword
              password={formData.password}
              onChange={(password) =>
                setFormData((prevData) => ({ ...prevData, password }))
              }
            />
          </div>
          <div className="relative w-full">
            <DataConfirmPassword
              confirmPassword={formData.confirmPassword}
              onChange={(confirmPassword) =>
                setFormData((prevData) => ({ ...prevData, confirmPassword }))
              }
            />
          </div>

          <div className="relative w-full">
            <DataCpf
              cpf={formData.cpf}
              onChange={(cpf) =>
                setFormData((prevData) => ({ ...prevData, cpf }))
              }
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

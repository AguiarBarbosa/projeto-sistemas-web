import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

export const ToastError: React.FC = () => {
  const notify = () => toast.error('As senhas não coincidem', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  notify();

  return (
    <div className="toast-error">
      <p>Ocorreu um erro ao salvar os dados.</p>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

import { InputMask } from "@react-input/mask";

interface DataCpfProps {
  cpf: string;
  onChange: (cpf: string) => void;
}

export const DataCpf = ({ cpf, onChange }: DataCpfProps) => {
  
  



  return (
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

      <label htmlFor="cpf" className="sr-only">CPF</label>
      <InputMask
        id="cpf"
        mask="999.999.999-99"
        replacement={{ 9: /\d/ }}
        value={cpf}
        onChange={(e) => onChange(e.target.value)}
        placeholder="CPF"
        className={`p-2 pl-10 border rounded-lg w-full focus:outline-greenpersonal focus:bg-green-50 ${cpf ? 'bg-green-50 border-greenpersonal' : ''}`}
        required
      />
    </div>
  );
};

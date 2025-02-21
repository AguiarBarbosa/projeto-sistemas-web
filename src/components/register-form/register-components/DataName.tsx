interface DataNameProps {
  name: string;
  onChange: (name: string) => void;
}

export const DataName = ({ name, onChange }: DataNameProps) => {
  return (
    <>
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
        value={name}
        onChange={(e) => onChange?.(e.target.value)}
        className={`p-2 pl-10 border rounded-lg w-full focus:outline-greenpersonal focus:bg-green-50 ${name ? 'bg-green-50 border-greenpersonal' : ''}`}
        required
      />
    </>
    );
    };

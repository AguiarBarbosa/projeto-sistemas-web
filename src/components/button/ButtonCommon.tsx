import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Aceita o evento de clique
}

export const ButtonCommon: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-greenpersonal hover:bg-green-800 text-white font-bold py-2 px-4 rounded-4xl w-56"  
    >
      {children}
    </button>
  );
};

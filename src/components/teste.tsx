import {InputMask} from "@react-input/mask";
import { useState } from "react";
import { ButtonCommon } from "./button";

export default function Formulario() {
  const [cpf, setCpf] = useState("");

  const handleChange = () => {
    const cpfFormatado = cpf.replace(/[.-]/g, ""); // Remove "." e "-"
    console.log("CPF digitado:", cpfFormatado);
    console.log("Tamanho do CPF:", cpfFormatado.length);
  };

  return (
    <div className="flex flex-col gap-4 w-80">
      <InputMask
        mask="___.___.___-__"
        replacement={{ _: /\d/ }}
        type="text"
        name="cpf"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)} // Atualiza o estado do CPF
        placeholder="CPF"
        className="p-2 pl-10 border rounded-lg w-full focus:outline-greenpersonal focus:bg-green-50"
        required
      />

      <ButtonCommon onClick={handleChange}>Teste</ButtonCommon>
    </div>
  );
}

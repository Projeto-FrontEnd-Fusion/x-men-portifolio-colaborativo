import React from "react";

interface ModalButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Tipagem explícita do evento onClick
    className?: string; // Permitir customização de classes
    children: React.ReactNode; // Usado para o texto ou conteúdo interno do botão
    type?: "button" | "submit" | "reset"; // Adicionando a propriedade type opcional
}

const ModalButton: React.FC<ModalButtonProps> = ({ onClick, children, className, type = "button" }) => {
    return (
        <button
            onClick={onClick}
            type={type} // Usando a propriedade type
            className={`w-72 h-16 rounded-lg bg-[#28eeed] text-[#022440] font-bold leading-8 border border-[#EEEEEE] ${className || ""} 
          sm:w-44 sm:h-12 md:w-72 md:h-16`} // Responsividade: menor tamanho em dispositivos móveis (sm), tamanho normal em dispositivos maiores (md)
        >
            {children}
        </button>


    );
};

export default ModalButton;

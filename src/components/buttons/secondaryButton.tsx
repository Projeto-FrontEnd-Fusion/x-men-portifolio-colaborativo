import React from "react";

interface SecondaryButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Tipagem explícita do evento onClick
    className?: string; // Permitir customização de classes
    children: React.ReactNode; // Usado para o texto ou conteúdo interno do botão
    type?: "button" | "submit" | "reset"; // Adicionando a propriedade type opcional
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ onClick, children, className, type = "button" }) => {
    return (
        <button
            onClick={onClick}
            type={type} // Usando a propriedade type
            className={`w-60 h-14 bg-[#28eeed] rounded-lg text-[#022440] font-bold leading-8 border border-[#EEEEEE] ${className || ""}`}
        >
            {children}
        </button>
    );
};

export default SecondaryButton;

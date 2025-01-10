import React from "react";

interface ButtonPrimaryProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string; // Permitir customização de classes
    children: React.ReactNode; // Usado para o texto ou conteúdo interno do botão
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ onClick, className, children }) => {
    return (
        <button
            onClick={onClick}
            className={`hidden lg:block w-72 h-14 bg-[#2B3A4F] rounded-lg text-[#EEEEEE] font-bold gap-4 leading-8 border border-[#EEEEEE] ${className || ""}`}
        >
            {children}
        </button>
    );
};

export default ButtonPrimary;

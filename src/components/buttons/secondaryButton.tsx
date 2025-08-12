import React from "react";

interface SecondaryButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Tipagem explícita do evento onClick
  className?: string; // Permitir customização de classes
  children: React.ReactNode; // Usado para o texto ou conteúdo interno do botão
  type?: "button" | "submit" | "reset"; // Adicionando a propriedade type opcional
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  onClick,
  children,
  className,
  type = "button",
}) => {
  return (
   <button
      onClick={onClick}
      type={type}
      className={`
        w-[189px] h-12 text-sm
        sm:w-48 sm:h-14 sm:text-base 
        lg:w-[240px] lg:h-[56px] lg:text-lg
        bg-[#28eeed] text-[#022440]
        font-bold rounded-lg border border-[#EEEEEE]
        hover:bg-[#022440] hover:text-white
        transition-all duration-300
        ${className || ""}
      `}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;

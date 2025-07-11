import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="flex flex-row bg-[#2B3A4F] lg:bg-[#022440] w-full justify-center items-center py-8 lg:py-12  px-4">
      <div className="flex w-full gap-6 flex-col lg:flex-row justify-evenly lg:py-2 lg:px-8 ">
        <div className="text-[#EEEEEEBF]">
          <p>Frontend Fusion • 2023 - 2025</p>
        </div>

        <div className="flex flex-row text-[#EEEEEEBF] lg:gap-8 gap-5">
          <span>Tecnologia</span>
          <span>Inovação</span>
          <span>Interação</span>
        </div>

        <div className="flex-row text-[#EEEEEEBF]">
          <button
            className="hidden flex-col-reverse lg:flex-row justify-center gap-1 items-center"
            onClick={scrollToTop}
          >
            Voltar ao topo <FaArrowCircleUp size={24} />
          </button>
        </div>
      </div>
      <div>
        <div className="lg:hidden px-3 flex w-[130px] h-[48px] text-[#EEEEEEBF]">
          <button
            className="text-ts flex flex-col-reverse w-full  lg:flex-row justify-center gap-1 items-start"
            onClick={scrollToTop}
          >
            Voltar ao topo <FaArrowCircleUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

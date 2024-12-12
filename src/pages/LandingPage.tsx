// LandingPage.tsx
import { useState } from "react";
import Modal from "../RegisterModal";
import Subtitle from "../assets/Subtitle.png";
import Tech from "../assets/Tech.png";
import Explorar from "../assets/Explorar.png";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="bg-[#011628] w-[534px] h-[245.94px] relative">
        <div className="absolute top-[280px]]bottom-0 left-[331px] right-0 flex items-center pt-[121px]">
          <div className="ml-[60px] text-white">
            <p className="text-5xl font-roboto  mb-4">Sua jornada começa aqui</p>

            <button
              onClick={openModal}
              className="w-[240px] h-[60px] bg-[#28EEED] rounded-lg text-[#022440] font-bold mt-4"
            >
              Faça Parte
            </button>

            <img src={Subtitle} alt="Subtitle" className="mt-4" />
          </div>

          <div className="ml-[100px]">
            <img src={Tech} alt="Tech" />
          </div>

          <button className="mt-[121px]">
            <img src={Explorar} alt="Explorar oportunidades" />
          </button>
        </div>
      </div>

     
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default LandingPage;

// LandingPage.tsx
import { useState } from "react";
import "../../../index.css";
import Logo from "../../../assets/logo.png";

import Subtitle from "../../../assets/subtitle.png";
import Tech from "../../../assets/Tech.png";
import Explorar from "../../../assets/Explorar.png";
import Modal from "../../components/Modal/RegisterModal";

import ButtonPrimary from "../buttons/buttonPrimary";
import SecondaryButton from "../buttons/secondaryButton";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className="flex w-full">
        <div className="flex lg:justify-evenly py-8 w-full bg-[#2B3A4F]">
          <div className="flex justify-around items-center lg:w-full">
            <img src={Logo} alt="Tech Logo" className="h-16 ml-4" />
            <ButtonPrimary onClick={openModal}>Faça Parte</ButtonPrimary>
          </div>
        </div>
      </header>

      <main className="flex w-full ">
        <div className="flex flex-col w-full items-start justify-evenly px-8 sm:px-16 lg:px-5 xxl:px-72 py-20 space-y-16">
          <div className="absolute top-0 -left-16 w-1/3 h-1/3 bg-[radial-gradient(40.64%_40.64%_at_50.08%_52.49%,_rgba(40,_238,_237,_0.25)_0%,_rgba(0,_0,_0,_0)_100%)] blur-lg pointer-events-none"></div>

          <h1
            className="text-[#EEEEEE] text-3xl sm:text-5xl lg:text-6xl xxl:text-7xl font-semibold leading-tight text-left max-w-2xl lg:py-20 px-2 space-y-16"
            style={{
              fontFamily: "Roboto",
              textUnderlinePosition: "from-font",
            }}
          >
            Sua jornada pelo desenvolvimento <br /> web começa aqui.
          </h1>

          <section className="flex flex-col lg:flex-row items-start lg:justify-between w-full space-y-8 lg:space-y-0 lg:space-x-16 xxl:space-x-96">
            <SecondaryButton onClick={openModal}>Faça Parte</SecondaryButton>
            <img
              src={Subtitle}
              alt="Logotipo"
              className="object-contain sm:w-44 sm:h-12 md:w-72 md:h-16 xxl:w-96 xxl:h-20"
              style={{
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "32px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            />
          </section>

          {/* Ajuste principal aqui 👇 */}
          <section className="flex justify-end self-end items-end w-full">
            <img
              src={Tech}
              alt="Tecnologias"
              className="w-96 h-12 sm:h-10 lg:h-20 xxl:h-24 object-contain"
            />
          </section>

          <footer className="flex justify-items-start w-full">
            <button>
              <img
                src={Explorar}
                alt="Botão explorar"
                className="xxl:h-16"
                style={{
                  width: "auto",
                  height: "32px",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              />
            </button>
          </footer>
        </div>

        <Modal isOpen={isModalOpen} closeModal={closeModal} />
      </main>
    </>
  );
};

export default Hero;

// LandingPage.tsx
import { useState } from "react";
import '../../../index.css';
import Logo from '../../../assets/logo.png';

import Subtitle from '../../../assets/subtitle.png'
import Tech from '../../../assets/Tech.png'
import Explorar from '../../../assets/Explorar.png'
import Modal from "../../components/modal/RegisterModal";
import ButtonPrimary from "../buttons/buttonPrimary";
import SecondaryButton from "../buttons/secondaryButton";

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (

        <>
            <header className="flex w-full ">
                <div className="flex lg:justify-center py-8 w-full bg-[#2B3A4F]">
                    <div className="flex justify-around items-center lg:w-4/5">
                        <img
                            src={Logo}
                            alt="Tech Logo"
                            className="h-16 ml-4" />
                        <ButtonPrimary onClick={openModal}>
                            Faça Parte
                        </ButtonPrimary>
                    </div>
                </div>
            </header>
            <main className="flex w-full">
                <div className="flex flex-col items-start justify-center px-8 sm:px-16 lg:px-96 py-20 space-y-16">
                    <div className="absolute top-0 -left-16 w-1/3 h-1/3 bg-[radial-gradient(40.64%_40.64%_at_50.08%_52.49%,_rgba(40,_238,_237,_0.25)_0%,_rgba(0,_0,_0,_0)_100%)] blur-lg pointer-events-none"></div>

                    <h1
                        className="text-[#EEEEEE] text-3xl sm:text-5xl font-semibold leading-tight text-left max-w-2xl lg: py-20 px-2 space-y-16 "
                        style={{
                            fontFamily: "Roboto",
                            textUnderlinePosition: "from-font",
                        }}
                    >
                        Sua jornada pelo desenvolvimento  <br /> web começa aqui.
                    </h1>


                    <section className="flex flex-col lg:flex-row items-center lg:justify-between w-auto space-y-8 lg:space-y-8 lg:space-x-96">
                        <SecondaryButton onClick={openModal}>
                            Faça Parte
                        </SecondaryButton>
                        <img
                            src={Subtitle}
                            alt="Logotipo"
                            className="object-contain"
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


                    <section className="flex justify-center lg:justify-end items-center w-full">
                        <img
                            src={Tech}
                            alt="Tecnologias"
                            className="h-12 sm:h-16 lg:h-20"
                        />
                    </section>


                    <footer className="flex justify-items-start w-auto">
                        <button>
                            <img
                                src={Explorar}
                                alt="Botão explorar"
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

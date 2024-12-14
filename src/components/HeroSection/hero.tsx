import { useState } from "react";
import Logo from '../../assets/logo.png'
import Modal from "../../components/Modal/RegisterModal";
import Subtitle from "../../assets/subtitle.png";
import Tech from "../../assets/Tech.png";
import Explorar from "../../assets/Explorar.png";

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <header className="bg-[#2B3A4F] w-full h-auto p-4">
                <div className="container  flex justify-between items-center ml-12 ">
                    <img
                        src={Logo}
                        alt="Tech Logo"
                        className="h-[60px] w-auto ml-12"
                    />
                    <button
                        onClick={openModal}
                        className="hidden sm:block px-6 py-3 bg-[#28EEED] rounded-lg text-[#022440] font-bold hover:bg-[#1CD6D4] focus:outline-none focus:ring-2 focus:ring-[#022440] focus:ring-opacity-50"
                    >
                        Faça Parte
                    </button>
                    <button
                        onClick={openModal}
                        className="block sm:hidden w-[430px] h-[56px] mt-[60px] bg-[#28EEED] rounded-lg text-[#022440] font-bold focus:outline-none focus:ring-2 focus:ring-[#022440] focus:ring-opacity-50"
                        style={{ gap: 0, opacity: 0 }}
                    >
                        Faça Parte
                    </button>
                </div>
            </header>

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



            <Modal isOpen={isModalOpen} closeModal={closeModal} />
        </>
    );
};

export default Hero;

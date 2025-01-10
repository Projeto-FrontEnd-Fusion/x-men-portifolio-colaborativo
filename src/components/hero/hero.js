import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// LandingPage.tsx
import { useState } from "react";
import '../../../index.css';
import Logo from '../../../assets/logo.png';
import Subtitle from '../../../assets/subtitle.png';
import Tech from '../../../assets/Tech.png';
import Explorar from '../../../assets/Explorar.png';
import Modal from "../../components/Modal/RegisterModal";
import ButtonPrimary from "../buttons/buttonPrimary";
import SecondaryButton from "../buttons/secondaryButton";
const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (_jsxs(_Fragment, { children: [_jsx("header", { className: "flex w-full", children: _jsx("div", { className: "flex lg:justify-center py-8 w-full bg-[#2B3A4F]", children: _jsxs("div", { className: "flex justify-around items-center lg:w-4/5", children: [_jsx("img", { src: Logo, alt: "Tech Logo", className: "h-16 ml-4" }), _jsx(ButtonPrimary, { onClick: openModal, children: "Fa\u00E7a Parte" })] }) }) }), _jsxs("main", { className: "flex w-full", children: [_jsxs("div", { className: "flex flex-col items-start justify-center px-8 sm:px-16 lg:px-48 xxl:px-96 py-20 space-y-16", children: [_jsx("div", { className: "absolute top-0 -left-16 w-1/3 h-1/3 bg-[radial-gradient(40.64%_40.64%_at_50.08%_52.49%,_rgba(40,_238,_237,_0.25)_0%,_rgba(0,_0,_0,_0)_100%)] blur-lg pointer-events-none" }), _jsxs("h1", { className: "text-[#EEEEEE] text-3xl sm:text-5xl lg:text-6xl xxl:text-7xl font-semibold leading-tight text-left max-w-2xl lg:py-20 px-2 space-y-16", style: {
                                    fontFamily: "Roboto",
                                    textUnderlinePosition: "from-font",
                                }, children: ["Sua jornada pelo desenvolvimento ", _jsx("br", {}), " web come\u00E7a aqui."] }), _jsxs("section", { className: "flex flex-col lg:flex-row items-center lg:justify-between w-full space-y-8 lg:space-y-0 lg:space-x-12 xxl:space-x-96", children: [_jsx(SecondaryButton, { onClick: openModal, children: "Fa\u00E7a Parte" }), _jsx("img", { src: Subtitle, alt: "Logotipo", className: "object-contain sm:w-44 sm:h-12 md:w-72 md:h-16 xxl:w-96 xxl:h-20", style: {
                                            fontSize: "20px",
                                            fontWeight: 400,
                                            lineHeight: "32px",
                                            textAlign: "left",
                                            textUnderlinePosition: "from-font",
                                            textDecorationSkipInk: "none",
                                        } })] }), _jsx("section", { className: "flex justify-center lg:justify-end items-center w-full", children: _jsx("img", { src: Tech, alt: "Tecnologias", className: "h-12 sm:h-10 lg:h-20 xxl:h-24" }) }), _jsx("footer", { className: "flex justify-items-start w-full", children: _jsx("button", { children: _jsx("img", { src: Explorar, alt: "Bot\u00E3o explorar", className: "xxl:h-16", style: {
                                            width: "auto",
                                            height: "32px",
                                            textUnderlinePosition: "from-font",
                                            textDecorationSkipInk: "none",
                                        } }) }) })] }), _jsx(Modal, { isOpen: isModalOpen, closeModal: closeModal })] })] }));
};
export default Hero;

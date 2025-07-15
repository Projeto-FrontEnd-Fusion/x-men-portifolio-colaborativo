import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import montain from "../../assets/montain.jpg";

export const NextLevel = () => {
  return (
    <section className="flex w-full bg-[#022440] justify-center py-12 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl items-center justify-center lg:justify-around gap-8 md:gap-8 px-4 ">
        <div className="flex flex-col items-center text-center md:text-left md:items-start gap-6 md:gap-8 py-2 md:px-2 lg:px-8 lg:py-8 lg:gap-8 w-full md:w-auto">
          <h1 className="font-bold text-white md:text-5xl md:w-[300px] lg:w-[480px]">
            Venha subir de nível com a gente
          </h1>
          <h2 className=" text-white text-base md:w-[300px] lg:w-[480px]  px-4 md:px-0 text-justify">
            Vamos transformar o aprendizado de desenvolvimento com inovação e
            divertimento. Assim como disse um grande sábio “A caminhada pode ser
            longa, mas a vista vale a pena".
          </h2>
          <div className="hidden md:flex py-12 justify-start">
            <button className="w-60 h-14 bg-[#28eeed] rounded-md text-[#022440] font-bold leading-8 border border-[#EEEEEE] hover:bg-[#28eeee69] transition-colors">
              Faça parte
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:gap-4 lg:gap-8  w-full md:w-auto ">
          <div className="flex flex-grow md:flex-col items-center md:items-start gap-6 md:gap-8  w-full md:w-[200px]">
            <div className="flex h-full flex-col md:flex-row gap-6 fle text-white w-full justify-around md:justify-start">
              <a
                href="https://www.linkedin.com/company/comunidade-frontend-fusion/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#28eeed] transition-colors flex flex-row items-center"
              >
                <TbBrandLinkedin size={38} /> Linkedin{" "}
              </a>
              <a
                href="https://github.com/Projeto-FrontEnd-Fusion/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#28eeed] transition-colors flex flex-row items-center gap-2"
              >
                <FaGithub size={36} /> Github
              </a>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="flex w-full text-center md:text-left">
                <h2 className="text-white font-semibold">NOSSOS CONTATOS</h2>
              </div>
              <div className="flex flex-col gap-1 text-center md:text-left  text-white w-full">
                <h2 className="flex text-base md:text-md">E-mail</h2>
                <h3 className="text-sm ">projetofrontendfusion@gmail.com</h3>
              </div>
              <div className="flex flex-col gap-1 text-center md:text-left  text-white ">
                <h2 className="flex text-base md:text-md">WhatsApp</h2>
                <h3 className="text-sm">+55 85 8470-3289</h3>
              </div>
            </div>
          </div>
          <div className="hidden md:block ml-8 md:ml-4 lg:ml-8 overflow-hidden md:w-[120px] lg:w-[196px] h-[690px]">
            <img
              src={montain}
              alt="Montanha"
              className="w-full h-full object-cover object-[42%_45%] scale-110"
            />
          </div>
          <div className="w-full md:hidden flex justify-center px-4 py-8">
            <button className="w-full h-14 bg-[#28eeed] rounded-md text-[#022440] font-bold leading-8 border border-[#EEEEEE] hover:bg-[#28eeee69] transition-colors">
              Faça parte
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

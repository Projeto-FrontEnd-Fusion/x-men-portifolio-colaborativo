import { useEffect, useState } from "react";
import "../../App.css";
import gameImage from "../../assets/game.png";
import lightningIcon from "../../assets/lightning_icon.svg";
import montain from "../../assets/montain.jpg";
import trophyIcon from "../../assets/trophy_icon.svg";

export function AboutSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Detecta o tamanho da tela dinamicamente (baseado em breakpoints do Tailwind)
  useEffect(() => {
    const handleResize = () => {
      // Verifica se o tamanho atual é correspondente ao lg (>=1024px)
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize(); // Verifica no carregamento
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <section className="grid md:grid-cols-6 lg:grid-cols-12 gap-5 md:gap-6 lg:gap-8 justify-items-center text-[#eeeeee] m-4 md:m-6 lg:m-24 max-w-[1146px]">
      <div className='grid md:col-span-6 lg:col-span-12 md:grid-cols-6 lg:grid-cols-12 gap-5 md:gap-6 lg:gap-8 max-w-[1076.8px]'>
        <div className='grid md:col-span-3 lg:col-span-7 gap-5'>
          <div className="grid gap-5">
            <h2 className="text-2xl lg:text-5xl font-medium">Acreditamos que aprender programação deve ser divertido e envolvente.</h2>

            <p className='text-base lg:text-lg'>Somos um projeto inovador que visa criar uma plataforma de aprendizado gamificada para tecnologias de Front-end e Back-end que possibilitem a interação prática entre os visitantes.</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-5 place-items-start lg:gap-8">
            <p className="text-sm rounded-3xl py-2 px-2 md:px-4 bg-[#394C67] text-[#FED674EE] border border-[#FED674EE] lg:text-[#28EEEDEE] lg:border-[#28EEEDEE]">TECNOLOGIA</p>
            <p className="text-sm rounded-3xl py-2 px-4 bg-[#394C67] text-[#FED674EE] border border-[#FED674EE] lg:text-[#28EEEDEE] lg:border-[#28EEEDEE]">INOVAÇÃO</p>
            <p className="text-sm rounded-3xl py-2 px-4 bg-[#394C67] text-[#FED674EE] border border-[#FED674EE] lg:text-[#28EEEDEE] lg:border-[#28EEEDEE]">INTERAÇÃO</p>
          </div>
        </div>

        <div className="grid md:col-span-3 lg:col-span-5 lg:col-start-8">
          <img src={gameImage} alt="Imagem de um jogo" className="w-full h-auto max-w-[447.99px] max-h-[326px]" />
        </div>
      </div>

      <div className="relative hidden lg:grid lg:col-span-12 bg-cover bg-center opacity-50 h-[240px] w-[1146px]" style={{ backgroundImage: `url(${montain})` }}></div>

      <div className="abolsute top-0 left-0 grid md:col-span-6 lg:col-span-12 md:grid-cols-6 lg:grid-cols-12 gap-5 md:gap-6 lg:gap-12 xl:w-[1239px]">
        <div className="flex flex-col gap-2 rounded-xl md:col-span-2 lg:col-span-4 lg:bg-[#2B3A4F] lg:p-5">
          <div className="md:flex md:gap-2">
            <span><img src={isLargeScreen ? lightningIcon : trophyIcon} alt="Trophy Icon" className="w-[27.5px] h-[27.5px] lg:w-[35px] lg:h-[50px]" /></span>
            <p className="text-3xl font-medium">+ 8 meses</p>
          </div>
          <p className="text-sm">Levando aprendizado aos entusiastas de tecnologia e juniores</p>
        </div>

        <div className="flex flex-col gap-2 rounded-xl md:col-span-2 lg:col-span-4 lg:bg-[#2B3A4F] lg:p-5">
          <div className="md:flex md:gap-2">
            <span><img src={isLargeScreen ? lightningIcon : trophyIcon} alt="Trophy Icon" className="w-[27.5px] h-[27.5px] lg:w-[35px] lg:h-[50px]" /></span>
            <p className="text-3xl font-medium">+ 50 colaboradores</p>
          </div>
          <p className="text-sm">Equipes compostas por desenvolvedores e designers trabalhando com garra</p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl md:col-span-2 lg:col-span-4 lg:bg-[#2B3A4F] lg:p-5">
          <div className="md:flex md:gap-2">
            <span><img src={isLargeScreen ? lightningIcon : trophyIcon} alt="Trophy Icon" className="w-[27.5px] h-[27.5px] lg:w-[35px] lg:h-[50px]" /></span>
            <p className="text-3xl font-medium">+ 100 projetos</p>
          </div>
          <p className="text-sm">Sempre trabalhando de forma conjunta, para levar o melhor resultado possível</p>
        </div>
      </div>
    </section>
  );
}
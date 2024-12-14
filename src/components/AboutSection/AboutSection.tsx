import { useEffect, useState } from "react";
import "../../App.css";
import console from "../../assets/console.png";
import gameImage from "../../assets/game.png";
import lightning from "../../assets/lightning.png";
import lightningIcon from "../../assets/lightning_icon.svg";
import montain from "../../assets/montain.jpg";
import trophy from "../../assets/trophy.png";
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
    <section className="grid md:grid-cols-6 lg:grid-cols-12 gap-5 md:gap-6 lg:gap-14 justify-items-center text-[#eeeeee] m-4 md:m-6 lg:m-24 max-w-[1146px]">
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

      <div className="hidden lg:grid lg:col-span-12 bg-cover bg-center opacity-50 h-[240px] w-[1146px]" style={{ backgroundImage: `url(${montain})` }}></div>

      <div className="grid md:col-span-6 lg:col-span-12 md:grid-cols-6 lg:grid-cols-12 gap-5 md:gap-6 lg:gap-12 xl:w-[1239px]">
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

      <div className="grid justify-items-center md:col-span-6 lg:col-span-12 gap-5 md:gap-6 lg:gap-12 max-w-[1146px]">
        <h2 className="text-2xl md:text-center lg:text-5xl font-medium md:max-w-[350px] lg:max-w-[600px]">Transformamos o aprender numa experiência única.</h2>

        <div className="flex gap-4 lg:gap-12 text-center max-w-full overflow-x-auto">
          <div className="flex flex-col items-center justify-center gap-2 border border-[#28EEED] rounded-3xl p-4 lg:px-[30px] lg:py-9 w-[296px]">
            <img src={console} alt="Console image" className="w-[130px] h-[95px]" />
            <p className="text-xs w-[236px]">Desafios e atividades interativas que incentivam o aprendizado prático</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 border border-[#FED674] rounded-3xl p-4 lg:px-[30px] lg:py-9 w-[296px]">
            <img src={trophy} alt="Trophy image" className="w-[130px] h-[95px]" />
            <p className="text-[13px] w-[236px]">Conquistas a cada desafio cumprido e feedback construtivo para cada participante</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 border border-[#96B33C] rounded-3xl p-4 lg:px-[30px] lg:py-9 w-[296px]">
            <img src={lightning} alt="Lightning image" className="w-[125px] h-[127px]" />
            <p className="text-xs w-[236px]">Suba de nível e entre em sua própria equipe. Se torne um Fusioner de respeito</p>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useEffect, useState } from "react";
import "../App.css";
import console from "../assets/console.png";
import consoleMobile from "../assets/console_mobile.png";
import gameImage from "../assets/game.png";
import lightning from "../assets/lightning.png";
import lightningIcon from "../assets/lightning_icon.svg";
import lightningMobile from "../assets/lightning_mobile.png";
import montain from "../assets/montain.jpg";
import trophy from "../assets/trophy.png";
import trophyIcon from "../assets/trophy_icon.svg";
import trophyMobile from "../assets/trophy_mobile.png";

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

  const badges = ["tecnologia", "inovação", "interação"];
  const stats = [
    {
      title: "+ 8 meses",
      imgSrc: isLargeScreen ? lightningIcon : trophyIcon,
      text: "Levando aprendizado aos entusiastas de tecnologia e juniores"
    },
    {
      title: "+ 50 colaboradores",
      imgSrc: isLargeScreen ? lightningIcon : trophyIcon,
      text: "Equipes compostas por desenvolvedores e designers trabalhando com garra"
    },
    {
      title: "+ 100 projetos",
      imgSrc: isLargeScreen ? lightningIcon : trophyIcon,
      text: "Sempre trabalhando de forma conjunta, para levar o melhor resultado possível"
    }
  ];
  const cards = [
    {
      imgSrc: isLargeScreen ? console : consoleMobile,
      imgAlt: "Console image",
      widthMobile: "138.97px",
      heightMobile: "138.97px",
      lg_width: "130px",
      lg_height: "95px",
      borderColor: "#28EEED",
      text: "Desafios e atividades interativas que incentivam o aprendizado prático"
    },
    {
      imgSrc: isLargeScreen ? trophy : trophyMobile,
      imgAlt: "Trophy image",
      widthMobile: "110.5px",
      heightMobile: "136.19px",
      lg_width: "130px",
      lg_height: "95px",
      borderColor: "#FED674",
      text: "Conquistas a cada desafio cumprido e feedback construtivo para cada participante"
    },
    {
      imgSrc: isLargeScreen ? lightning : lightningMobile,
      imgAlt: "Lightning image",
      widthMobile: "125.3px",
      heightMobile: "127.61px",
      lg_width: "125px",
      lg_height: "127px",
      borderColor: "#96B33C",
      text: "Suba de nível e entre em sua própria equipe. Se torne um Fusioner de respeito"
    }
  ]

  return (
    <section id="aboutSection">
      <div className='grid md:col-span-6 lg:col-span-12 md:grid-cols-6 lg:grid-cols-12 gap-5 md:gap-6 lg:gap-8 max-w-[1076.8px]'>
        <div className='grid md:col-span-3 lg:col-span-7 gap-5'>
          <div className="grid gap-5">
            <h2 className="text-2xl lg:text-5xl font-medium">Acreditamos que aprender programação deve ser divertido e envolvente.</h2>

            <p className='text-base lg:text-lg'>Somos um projeto inovador que visa criar uma plataforma de aprendizado gamificada para tecnologias de Front-end e Back-end que possibilitem a interação prática entre os visitantes.</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-5 place-items-start lg:gap-8">
            {badges.length > 0 && (
              badges.map((badge) => (
                <p className="badge uppercase" key={badge}>{badge}</p>
              ))
            )}
          </div>
        </div>

        <div className="grid md:col-span-3 lg:col-span-5 lg:col-start-8">
          <img src={gameImage} alt="Imagem de um jogo" className="w-full h-auto max-w-[447.99px] max-h-[326px]" loading="lazy" />
        </div>
      </div>

      <div className="hidden lg:grid lg:col-span-12 bg-cover bg-center opacity-50 h-[240px] w-[1146px]" style={{ backgroundImage: `url(${montain})` }}></div>

      <div className="grid md:col-span-6 lg:col-span-12 md:grid-cols-6 lg:grid-cols-12 gap-6 lg:gap-12 xl:w-[1239px]">
        {stats.length > 0 && (
          stats.map((stat) => (
            <div key={stat.title} className="flex flex-col gap-2 rounded-xl md:col-span-2 lg:col-span-4 lg:bg-[#2B3A4F] lg:py-[18px] lg:px-5">
              <div className="md:flex md:gap-2">
                <span><img src={stat.imgSrc} alt="Trophy Icon" className="w-[27.5px] h-[27.5px] lg:w-[35px] lg:h-[50px]" /></span>
                <p className="text-3xl font-medium">{stat.title}</p>
              </div>
              <p className="text-sm">{stat.text}</p>
            </div>
          ))
        )}
      </div>

      <div className="grid justify-items-center my-10 md:col-span-6 lg:col-span-12 gap-6 lg:gap-12 max-w-[1146px] lg:mb-[216px]">
        <h2 className="text-2xl md:text-center lg:text-5xl font-medium md:max-w-[350px] lg:max-w-[600px]">Transformamos o aprender numa experiência única.</h2>

        <div className="flex gap-6 lg:gap-12 text-center max-w-full overflow-x-auto">
          {cards.length > 0 && (
            cards.map((card) => (
              <div key={card.imgAlt} className="flex flex-col flex-shrink-0 items-center justify-center gap-2 border rounded-3xl p-1.5 lg:px-5 lg:py-8 w-[297px] max-h-[205px]" style={{ borderColor: card.borderColor }}>
                <img src={card.imgSrc} alt={card.imgAlt} style={{ width: isLargeScreen ? card.lg_width : card.widthMobile, height: isLargeScreen ? card.lg_height : card.heightMobile }} />
                <p className="text-sm min-w-[236px]">{card.text}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
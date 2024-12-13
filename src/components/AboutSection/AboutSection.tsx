import "../../App.css";
import gameImage from "../../assets/game.png";
import montain from "../../assets/montain.jpg";

export function AboutSection() {
  return (
    <section className="text-[#eeeeee] py-4 max-w-[1136px] mx-auto">
      <div className='flex flex-col sm:flex-row gap-4 justify-around max-w-[1146px] px-3 lg:px-6'>
        <div className='flex flex-col gap-4 max-w-[378px] lg:max-w-[600px]'>
          <h2 className="text-2xl lg:text-5xl font-medium">Acreditamos que aprender programação deve ser divertido e envolvente.</h2>

          <p className='text-base lg:text-lg max-w-[518px]'>Somos um projeto inovador que visa criar uma plataforma de aprendizado gamificada para tecnologias de Front-end e Back-end que possibilitem a interação prática entre os visitantes.</p>

          <div className="flex justify-between md:justify-start lg:gap-[69px] mt-4">
            <p className="text-base inline-block rounded-full py-2 px-4 bg-[#394C67] text-[#FED674EE] border border-[#FED674EE] lg:text-[#28EEEDEE] lg:border-[#28EEEDEE]">TECNOLOGIA</p>
            <p className="text-base inline-block rounded-full py-2 px-4 bg-[#394C67] text-[#FED674EE] border border-[#FED674EE] lg:text-[#28EEEDEE] lg:border-[#28EEEDEE]">INOVAÇÃO</p>
            <p className="text-base inline-block rounded-full py-2 px-4 bg-[#394C67] text-[#FED674EE] border border-[#FED674EE] lg:text-[#28EEEDEE] lg:border-[#28EEEDEE]">INTERAÇÃO</p>
          </div>
        </div>

        <div className="relative w-[364px] h-[218.4px] md:w-[398px] md:h-[210px] lg:w-[447.99px] lg:h-[216px] xl:h-[216px]">
          <img src={gameImage} alt="Imagem de um jogo" className="w-full h-auto" />
          <div className="absolute inset-0 bg-[#28EEED40] opacity-25 z-index: 1"></div>
        </div>
      </div>
      <div className="hidden lg:block bg-cover bg-center max-w-[1146px] h-[240px] opacity-50 mt-16" style={{ backgroundImage: `url(${montain})` }}></div>
    </section>
  );
}
import vila from "../../assets/vila.png";
import mountainVila from "../../assets/mountainVila.png";

export const Community = () => {
  return (
    <section className="flex flex-col w-full bg-[#022440] justify-center py-12 px-4 items-center">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col ">
          <div className="flex flex-col items-center text-center lg:text-left lg:items-start gap-6 lg:gap-8 lg:px-8 w-full lg:w-auto ">
            <h1 className="text-start text-white lg:text-5xl px-4 lg:w-[560px]">
              Acreditamos que aprender programação deve ser divertido e
              envolvente.
            </h1>
            <h2 className="text-white text-base lg:w-[480px] px-4 lg:px-0 text-justify ">
              Somos um projeto inovador que visa criar uma plataforma de
              aprendizado gamificada para tecnologias de Front-end e Back-end
              que possibilitam a interação prática entre os visitantes.
            </h2>
          </div>
          <div className="flex w-full items-center justify-around px-8 py-8">
            <button className="border py-1 px-2 rounded-2xl text-[#28EEEDEE] border-[#28EEEDEE] text-base">
              TECNOLOGIA
            </button>
            <button className="border py-1 px-2 rounded-2xl text-[#28EEEDEE] border-[#28EEEDEE] text-base">
              INOVAÇÃO
            </button>
            <button className="border py-1 px-2 rounded-2xl text-[#28EEEDEE] border-[#28EEEDEE] text-base">
              INTEGRAÇÃO
            </button>
          </div>
        </div>
        <div className="w-[450] h-[325]">
          <img src={vila} alt="" />
        </div>
      </div>
      <div className="hidden lg:block">
        <img src={mountainVila} alt="" />
      </div>
    </section>
  );
};

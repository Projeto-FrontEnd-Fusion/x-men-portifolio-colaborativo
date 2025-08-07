import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import control from "../../assets/control.png";
import trophy from "../../assets/trophy.png";
import ray from "../../assets/ray.png";

export const GamifiedExperience = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    centerMode: false,
  };

  return (
    <section className="py-12 px-4 bg-[#022440]">
      <div className="max-w-6xl mx-auto">
        <div className=" flex justify-center text-center mb-12">
          <h1 className="w-[580px] h-[126px] text-3xl md:text-4xl font-bold text-white">
            Transformamos o aprender numa experiência única.
          </h1>
        </div>

        <div className="md:hidden px-4">
          <Slider {...settings}>
            <div className="px-2 ">
              <div className="bg-[#022440] w-[297px] h-[206px] p-6 rounded-xl flex flex-col items-center text-center border border-[#28EEED]">
                <img
                  src={control}
                  alt="Ícone de controle"
                  className="w-[139px] h-[139px]"
                />
                <h3 className="text-xs font-medium text-white">
                  Desafios e atividades interativas que incentivam o aprendizado
                  prático
                </h3>
              </div>
            </div>
            <div className="px-2">
              <div className="bg-[#022440] w-[297px] h-[206px] p-6 rounded-xl flex flex-col items-center text-center border border-[#FED674]">
                <img
                  src={trophy}
                  alt="Ícone de troféu"
                  className="w-[139px] h-[139px]"
                />
                <h3 className="text-xs font-medium text-white">
                  Conquistas a cada desafio cumprido e feedback construtivo para
                  cada participante
                </h3>
              </div>
            </div>
            <div className="px-2">
              <div className="bg-[#022440] w-[297px] h-[206px] p-6 rounded-xl flex flex-col items-center text-center border border-[#96B33C]">
                <img
                  src={ray}
                  alt="Ícone de raio"
                  className="w-[139px] h-[139px]"
                />
                <h3 className="text-xs font-medium text-white">
                  Suba de nível e entre em sua própria equipe. Se torne um
                  Fusioner de respeito
                </h3>
              </div>
            </div>
          </Slider>
        </div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#022440] w-[296px] h-[205px] font-medium rounded-xl py-4 px-2 justify-center flex flex-col items-center text-center border border-[#28EEED]">
            <img
              src={control}
              alt="Ícone de controle"
              className="w-[130px] h-[95px]"
            />
            <h3 className="text-xs w-[236px] h-[30px]  text-white">
              Desafios e atividades interativas que incentivam o aprendizado
              prático
            </h3>
          </div>
          <div className="bg-[#022440] w-[296px] h-[205px] font-medium rounded-xl py-4 px-2 justify-center flex flex-col items-center text-center border border-[#FED674]">
            <img
              src={trophy}
              alt="Ícone de troféu"
              className="w-[130px] h-[95px]"
            />
            <h3 className="text-xs w-[236px] h-[35px]  text-white">
              Conquistas a cada desafio cumprido e feedback construtivo para
              cada participante
            </h3>
          </div>
          <div className="bg-[#022440] w-[296px] h-[205px] font-medium rounded-xl py-4 px-2 justify-center flex flex-col items-center text-center border border-[#96B33C]">
            <img
              src={ray}
              alt="Ícone de raio"
              className="w-[125px] h-[127px]"
            />
            <h3 className="text-xs w-[236px] h-[30px] text-white">
              Suba de nível e entre em sua própria equipe. Se torne um Fusioner
              de respeito
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

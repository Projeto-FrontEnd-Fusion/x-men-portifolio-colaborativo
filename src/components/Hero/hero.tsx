import "../../App.css";
import Logo from "../../assets/logo.png";
import Subtitle from '../../assets/subtitle.png'

const Hero = () => {
    return (
        <>
            <nav className="bg-[#2b3a4f] w-[1920px] h-[120px] flex items-center justify-around relative max-w-full overflow-hidden">
                <div className="text-[#28EEED] ml-[32px] text-[32px] font-bold leading-[40px] p-[40px]">
                    <img src={Logo} alt="logo" />
                </div>

                <div>
                    <button className="w-[240px] h-[60px] text-[20px] leading-[32px] font-semibold border-[1px] border-[#EEEEEE] border-solid rounded-[8px] text-[#EEEEEE] font-['Roboto']">
                        Faça Parte
                    </button>
                </div>
            </nav>
            <div className="bg-[#011628] w-full h-[88vh] relative  ">
                <div className=" absolute top-0 bottom-0 left-0 right-0 flex items-center w-[534px] h-[245.94px] ml-[331px] pt-[280px] font-['Roboto']">
                    <div className="text-white text-5xl font-bold ml-[60px] font-['Roboto'] ">
                        <p>Sua jornada pelo desenvolvimento web começa aqui.</p>
                        <div className="pt-[121.97px] flex items-center   ">
                            <div>
                            <button className="w-[240px] h-[60px] justify-center text-[20px] leading-[32px] font-semibold bg-[#28EEED] rounded-[8px] text-[#022440] font-['Roboto']">
                                Faça Parte
                            </button>
                            </div>
                            
                            <img src={Subtitle} alt="Subtitle" className=" leading-[32px] ml-[372px] h-auto" />
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Hero;

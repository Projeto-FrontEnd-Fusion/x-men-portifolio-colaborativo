import "../../App.css";
import Logo from "../../assets/logo.png";

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

            <div className="bg-[#011628] w-full h-[100vh] relative">

                <aside
                    className="absolute top-0 left-0 w-full h-[0px] border-[1px] border-solid border-[#28EEED]"
                ></aside>
                <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                    <div className="text-white text-5xl font-bold">
                        <p>Conteúdo Central</p>
                    </div>
                </div>


                <aside
                    className="absolute top-0 left-0 border-[1px] border-solid border-[#28EEED] h-full w-[300px]"
                    style={{
                        background: `
                            radial-gradient(40.64% 40.64% at 50% 0%, rgba(40, 238, 237, 0.25) 0%, rgba(0, 0, 0, 0) 100%) 
                            no-repeat top center / 700px 700px
                        `,
                    }}
                ></aside>

                <aside
                    className="absolute top-0 left-0 border-[1px] border-solid border-[#28EEED] h-full w-[300px]"
                ></aside>

                <aside
                    className="absolute top-0 right-0 border-[1px] border-solid border-[#28EEED] h-full w-[300px]"
                ></aside>

                <footer className="absolute bottom-0 w-full border-[1px] border-solid border-[#28EEED] h-[200px] z-0">
                </footer>
            </div >
        </>
    );
};

export default Hero;

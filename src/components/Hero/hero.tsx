
const Hero = () => {
    return (
        <div className="bg-[#011628] w-full h-[100vh] relative">
            <aside
                className="absolute top-0 left-0 w-full h-[0px] border-[1px] border-solid border-[#28EEED]"
                style={{
                    background:
                        "radial-gradient(40.64% 40.64% at 50.08% 52.49%, rgba(40, 238, 237, 0.25) 0%, rgba(0, 0, 0, 0) 100%)",
                }}
            ></aside>
            <aside
                className="absolute top-0 left-0 border-[1px] border-solid border-[#28EEED] h-full w-[300px]"
                style={{
                    background:
                        "radial-gradient(40.64% 40.64% at 50.08% 52.49%, rgba(40, 238, 237, 0.25) 0%, rgba(0, 0, 0, 0) 100%)",
                }}
            ></aside>

            <aside
                className="absolute top-0 left-0 border-[1px] border-solid border-[#28EEED] h-full w-[300px]"

            >
            </aside>


            <aside className="absolute top-0 right-0 border-[1px] border-solid border-[#28EEED] h-full w-[300px]">

            </aside>


            <footer className="absolute bottom-0 w-full border-[1px] border-solid border-[#28EEED] h-[200px] z-0">

            </footer>
        </div>
    );
};

export default Hero;

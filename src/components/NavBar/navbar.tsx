import "../../App.css";
import trash from "../../assets/lixo.png";

const NavBar = () => {
    return (
        <nav className="bg-[#2b3a4f] w-full h-[120px] flex items-center relative">
            <div className="text-[#28EEED] text-[32px] font-[Zen Dots] leading-[40px] p-[40px]">
                Frontend
                <br /> Fusion
            </div>
            <img className="absolute right-[40px] top-[40px]" src={trash} alt="trash icon" />
        </nav>
    );
};

export default NavBar;

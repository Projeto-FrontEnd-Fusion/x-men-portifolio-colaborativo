import "../../App.css";
import trash from "../../assets/lixo.png";

const NavBar = () => {
    return (
        <nav className="bg-[#2b3a4f] w-[1920px] h-[120px] flex items-center relative max-w-full overflow-hidden">
            <div className="text-[#28EEED] ml-[32px] text-[32px] border border-[#28EEED] font-[zen-dots] font-bold leading-[40px] p-[40px] shadow-[0px_1px_4px_0px_rgba(40,238,237,0.4)]">
                Frontend
                <br /> Fusion
            </div>

            <img className="absolute right-[312px] top-[40px]" src={trash} alt="trash icon" />
        </nav>
    );
};

export default NavBar;

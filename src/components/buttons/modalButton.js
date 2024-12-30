import { jsx as _jsx } from "react/jsx-runtime";
const ModalButton = ({ onClick, children, className, type = "button" }) => {
    return (_jsx("button", { onClick: onClick, type: type, className: `w-72 h-16 rounded-lg bg-[#28eeed] text-[#022440] font-bold leading-8 border border-[#EEEEEE] ${className || ""} 
          sm:w-44 sm:h-12 md:w-72 md:h-16`, children: children }));
};
export default ModalButton;

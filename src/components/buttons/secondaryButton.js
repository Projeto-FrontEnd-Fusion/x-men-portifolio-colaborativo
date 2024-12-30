import { jsx as _jsx } from "react/jsx-runtime";
const SecondaryButton = ({ onClick, children, className, type = "button" }) => {
    return (_jsx("button", { onClick: onClick, type: type, className: `w-60 h-14 bg-[#28eeed] rounded-lg text-[#022440] font-bold leading-8 border border-[#EEEEEE] ${className || ""}`, children: children }));
};
export default SecondaryButton;

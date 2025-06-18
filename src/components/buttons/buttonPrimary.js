import { jsx as _jsx } from "react/jsx-runtime";
const ButtonPrimary = ({ onClick, className, children }) => {
    return (_jsx("button", { onClick: onClick, className: `hidden lg:block w-72 h-14 bg-[#2B3A4F] rounded-lg text-[#EEEEEE] font-bold gap-4 leading-8 border border-[#EEEEEE] ${className || ""}`, children: children }));
};
export default ButtonPrimary;

import { jsx as _jsx } from "react/jsx-runtime";
const SecondaryButton = ({ onClick, children, className, type = "button" }) => {
    return (_jsx("button", { onClick: onClick, type: type, className: `
            sm:w-36 sm:justify-start sm:h-8
            md:w-72 md:h-16 w-60 h-14 
            bg-[#28eeed] rounded-lg text-[#022440] 
            font-bold leading-8 border border-[#EEEEEE]
            ${className || ""}
             bottom-1/2 mr-20 
            md:static  
            justify-start
        `, children: children }));
};
export default SecondaryButton;

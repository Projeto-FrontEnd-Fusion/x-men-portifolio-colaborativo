import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable react-hooks/rules-of-hooks */
import "../../../index.css";
import close from "../../../assets/close.png";
import Logo from "../../../assets/logo.png";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import ModalButton from "../buttons/modalButton";
// Definindo o esquema de validação com Yup
const schema = Yup.object({
    name: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    message: Yup.string().required("Mensagem é obrigatória"),
    skills: Yup.string().required("Habilidades são obrigatórias"),
    role: Yup.array().min(1, "Marque pelo menos um cargo").required("Cargo é obrigatório"),
}).required();
const Modal = ({ isOpen, closeModal }) => {
    if (!isOpen)
        return null;
    const contatos = [
        { id: 1, label: "Entre em contato", value: "contato@frontendfusion.com.br" },
        { id: 2, label: "WhatsApp", value: "+55 11 9 9999-8888" },
        { id: 3, label: "Brasil", value: "Fortaleza, CE" },
    ];
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            role: [], // Garantir que "role" seja sempre um array
        },
    });
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (data) => {
        console.log(data);
        setIsSubmitted(true);
        reset();
        setTimeout(() => {
            setIsSubmitted(false);
        }, 3000);
    };
    return (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-60", children: _jsxs("div", { className: "text-white p-6 sm:p-8 lg:p-12 w-full sm:w-4/5 lg:w-2/3 max-h-screen overflow-y-auto lg:overflow-hidden", children: [_jsx("header", { className: "bg-[#2b3a4f] py-4 sm:py-6 lg:py-8 w-full flex justify-between items-center", children: _jsxs("div", { className: "w-full max-w-[90%] mx-auto flex justify-between items-center", children: [_jsx("img", { src: Logo, alt: "Logotipo", className: "h-8 sm:h-10 md:h-12" }), _jsx("button", { onClick: closeModal, className: "bg-transparent focus:outline-none", children: _jsx("img", { src: close, alt: "Fechar Modal", className: "h-6 sm:h-8" }) })] }) }), _jsxs("div", { className: "flex flex-col lg:flex-row w-full h-auto", children: [_jsxs("aside", { className: "lg:w-1/2 w-full p-6 sm:p-8 lg:p-8 bg-[#022440] lg:mb-0", children: [_jsx("h2", { className: "text-2xl sm:text-3xl font-bold mb-4", children: "Torne-se um Fusioner" }), _jsx("p", { className: "text-sm sm:text-base mb-6", children: "Venha fazer parte desta envolvente jornada. Vamos juntos!" }), _jsx("ul", { className: "space-y-4 sm:space-y-6 mt-10 sm:mt-20", children: contatos.map((contato) => (_jsxs("li", { className: "flex flex-col", children: [_jsx("span", { className: "text-lg font-semibold mb-1 sm:mb-2", children: contato.label }), _jsx("span", { className: "text-sm", children: contato.value })] }, contato.id))) })] }), _jsxs("div", { className: "lg:w-1/2  w-full p-6 sm:p-8 lg:p-8 bg-white text-[#022440]", children: [_jsx("h2", { className: " text-2xl sm:text-3xl text-start font-bold mb-4", children: "Preencha os dados abaixo" }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsxs("div", { className: "mb-4", children: [_jsxs("label", { htmlFor: "name", className: "block text-sm mb-2", children: ["Nome", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("input", { id: "name", type: "text", className: `w-3/4 p-3 bg-[#f9f9f9] text-[#022440] border ${errors.name ? 'border-red-500' : 'border-[#ddd]'} rounded-lg`, ...register("name") }), errors.name && _jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.name.message })] }), _jsxs("div", { className: "mb-4", children: [_jsxs("label", { htmlFor: "email", className: "block text-sm mb-2", children: ["E-mail", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("input", { id: "email", type: "email", className: `w-3/4 p-3 bg-[#f9f9f9] text-[#022440] border ${errors.email ? 'border-red-500' : 'border-[#ddd]'} rounded-lg`, ...register("email") }), errors.email && _jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.email.message })] }), _jsxs("div", { className: "mb-4", children: [_jsxs("label", { htmlFor: "message", className: "block text-sm mb-2", children: ["Quais s\u00E3o suas habilidades?", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("textarea", { id: "message", className: `w-3/4 p-3 bg-[#f9f9f9] text-[#022440] border ${errors.message ? 'border-red-500' : 'border-[#ddd]'} rounded-lg`, rows: 3, ...register("message") }), errors.message && _jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.message.message })] }), _jsxs("div", { className: "mb-6 ", children: [_jsxs("label", { className: "block text-sm mb-2", children: ["Qual cargo voc\u00EA ir\u00E1 atuar? ", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("div", { className: "grid grid-cols-2 gap-4", children: ['Desenvolvedor Front-end', 'Desenvolvedor Back End', 'Desenvolvedor Full Stack', 'UX Designer'].map((role) => (_jsxs("label", { className: "flex items-center justify-between space-x-4 w-full max-w-md text-[#7188AA]", children: [_jsx("input", { type: "checkbox", className: "w-4 h-4 border-2 border-gray-300 rounded-full appearance-none checked:bg-[#7188AA] checked:border-[#7188AA] focus:outline-none", ...register("role"), value: role }), _jsx("span", { className: "text-sm flex-1", children: role })] }, role))) }), errors.role && _jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.role?.message })] }), _jsxs("div", { className: "mb-6", children: [_jsxs("label", { htmlFor: "about", className: "block text-sm mb-2 ", children: ["Nos conte mais sobre voc\u00EA", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("textarea", { id: "about", className: `w-3/4 p-3 bg-[#f9f9f9] text-[#022440] border ${errors.skills ? 'border-red-500' : 'border-[#ddd]'} rounded-lg`, rows: 4, ...register("skills") }), errors.skills && _jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.skills.message })] }), _jsx("div", { className: "flex ml-10", children: isSubmitted ? (_jsx("p", { className: "text-green-500 text-lg", children: "Mensagem enviada com sucesso!" })) : (_jsxs(_Fragment, { children: [_jsx(ModalButton, { onClick: handleSubmit(onSubmit), type: "submit", className: "hidden sm:block", children: "Fa\u00E7a parte" }), _jsx("button", { onClick: handleSubmit(onSubmit), type: "submit", className: "block mr-4 sm:hidden w-36 h-10 bg-[#28eeed] text-[#022440] font-bold rounded-lg border border-[#EEEEEE]", children: "Fa\u00E7a Parte" })] })) })] })] })] })] }) }));
};
export default Modal;

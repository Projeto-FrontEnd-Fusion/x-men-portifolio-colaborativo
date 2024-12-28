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

const Modal = ({ isOpen, closeModal }: { isOpen: boolean; closeModal: () => void }) => {
  if (!isOpen) return null;

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
  const onSubmit = (data: any) => {
    console.log(data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-60">
      <div className="text-white p-6 sm:p-8 lg:p-12 w-full sm:w-4/5 lg:w-2/3 max-h-screen overflow-y-auto lg:overflow-hidden">
        <header className="bg-[#2b3a4f] py-4 sm:py-6 lg:py-8 w-full flex justify-between items-center">
          <div className="w-full max-w-[90%] mx-auto flex justify-between items-center">
            <img src={Logo} alt="Logotipo" className="h-8 sm:h-10 md:h-12" />
            <button onClick={closeModal} className="bg-transparent focus:outline-none">
              <img src={close} alt="Fechar Modal" className="h-6 sm:h-8" />
            </button>
          </div>
        </header>
        <div className="flex flex-col lg:flex-row w-full h-auto">
          <aside className="lg:w-1/2 w-full p-6 sm:p-8 lg:p-8 bg-[#022440] lg:mb-0">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Torne-se um Fusioner</h2>
            <p className="text-sm sm:text-base mb-6">Venha fazer parte desta envolvente jornada. Vamos juntos!</p>
            <ul className="space-y-4 sm:space-y-6 mt-10 sm:mt-20">
              {contatos.map((contato) => (
                <li key={contato.id} className="flex flex-col">
                  <span className="text-lg font-semibold mb-1 sm:mb-2">{contato.label}</span>
                  <span className="text-sm">{contato.value}</span>
                </li>
              ))}
            </ul>
          </aside>
          <div className="lg:w-1/2  w-full p-6 sm:p-8 lg:p-8 bg-white text-[#022440]">
            <h2 className=" text-2xl sm:text-3xl text-start font-bold mb-4">Preencha os dados abaixo</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm mb-2">
                  Nome<span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-3/4 p-3 bg-[#f9f9f9] text-[#022440] border ${errors.name ? 'border-red-500' : 'border-[#ddd]'} rounded-lg`}
                  {...register("name")}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm mb-2">
                  E-mail<span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-3/4 p-3 bg-[#f9f9f9] text-[#022440] border ${errors.email ? 'border-red-500' : 'border-[#ddd]'} rounded-lg`}
                  {...register("email")}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm mb-2">
                  Quais são suas habilidades?<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  className={`w-3/4 p-3 bg-[#f9f9f9] text-[#022440] border ${errors.message ? 'border-red-500' : 'border-[#ddd]'} rounded-lg`}
                  rows={3}
                  {...register("message")}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <div className="mb-6 ">
                <label className="block text-sm mb-2">
                  Qual cargo você irá atuar? <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {['Desenvolvedor Front-end', 'Desenvolvedor Back End', 'Desenvolvedor Full Stack', 'UX Designer'].map((role) => (
                    <label
                      key={role}
                      className="flex items-center justify-between space-x-4 w-full max-w-md text-[#7188AA]"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 border-2 border-gray-300 rounded-full appearance-none checked:bg-[#7188AA] checked:border-[#7188AA] focus:outline-none"
                        {...register("role")}
                        value={role}
                      />
                      <span className="text-sm flex-1">{role}</span>
                    </label>
                  ))}
                </div>
                {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role?.message}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="about" className="block text-sm mb-2 ">
                  Nos conte mais sobre você<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="about"
                  className={`w-3/4 p-3 bg-[#f9f9f9] text-[#022440] border ${errors.skills ? 'border-red-500' : 'border-[#ddd]'} rounded-lg`}
                  rows={4}
                  {...register("skills")}
                ></textarea>
                {errors.skills && <p className="text-red-500 text-sm mt-1">{errors.skills.message}</p>}
              </div>

              <div className="flex ml-10">
                {isSubmitted ? (
                  <p className="text-green-500 text-lg">Mensagem enviada com sucesso!</p>
                ) : (
                  <>
                    {/* Botão padrão para dispositivos maiores */}
                    <ModalButton
                      onClick={handleSubmit(onSubmit)}
                      type="submit"
                      className="hidden sm:block"
                    >
                      Faça parte
                    </ModalButton>

                    <button
                      onClick={handleSubmit(onSubmit)}
                      type="submit"
                      className="block mr-4 sm:hidden w-36 h-10 bg-[#28eeed] text-[#022440] font-bold rounded-lg border border-[#EEEEEE]"
                    >
                      Faça Parte
                    </button>
                  </>
                )}
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
import "../../../index.css";
import close from "../../../assets/close.png";
import Logo from "../../../assets/logo.png";
import SecondaryButton from "../buttons/secondaryButton";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";

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
    { id: 1, label: "E-mail", value: "contato@frontendfusion.com.br" },
    { id: 2, label: "WhatsApp", value: "+55 11 9 9999-8888" },
    { id: 3, label: "Localização", value: "Fortaleza, CE" },
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      role: [], // Garantir que "role" seja sempre um array
    },
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const roles = watch("role"); // Para ver os valores selecionados dos checkboxes

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="text-white p-12 w-full sm:w-4/5 lg:w-2/3 max-h-screen overflow-y-auto lg:overflow-hidden">
        <header className="bg-[#2b3a4f] py-8 w-full flex justify-between items-center">
          <div className="lg:w-4/5 mx-auto flex justify-between items-center">
            <img src={Logo} alt="Logotipo" className="h-10 md:h-12" />
            <button onClick={closeModal} className="bg-transparent focus:outline-none">
              <img src={close} alt="Fechar Modal" className="h-8 w-8" />
            </button>
          </div>
        </header>
        <div className="flex flex-col lg:flex-row w-full h-auto">
          {/* Sidebar de Contatos */}
          <aside className="lg:w-1/2 p-12 bg-[#022440] lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">Torne-se um Fusioner</h2>
            <p className="text-lg md:text-xl mb-6">Venha fazer parte desta jornada!</p>
            <ul className="space-y-6">
              {contatos.map((contato) => (
                <li key={contato.id} className="flex flex-col">
                  <span className="text-lg font-semibold">{contato.label}:</span>
                  <span className="text-md">{contato.value}</span>
                </li>
              ))}
            </ul>
          </aside>

          {/* Formulário de Contato */}
          <div className="lg:w-1/2 p-12 bg-white text-[#022440]">
            <h2 className="text-3xl text-center font-bold mb-2">Entre em Contato</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg">
                  Nome<span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full p-3 mt-0 bg-[#f9f9f9] text-[#022440] border ${errors.name ? 'border-red-500' : 'border-[#ddd]'} rounded-lg`}
                  placeholder="Seu Nome"
                  {...register("name")}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-lg">
                  E-mail<span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full p-3 mt-0 bg-[#f9f9f9] text-[#022440] border ${errors.email ? 'border-red-500' : 'border-[#ddd]'} rounded-lg`}
                  placeholder="Seu E-mail"
                  {...register("email")}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-lg">
                  Quais são suas habilidades?<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  className={`w-full p-3 mt-0 bg-[#f9f9f9] text-[#022440] border ${errors.message ? 'border-red-500' : 'border-[#ddd]'} rounded-lg`}
                  placeholder="Sua Mensagem"
                  rows={3}
                  {...register("message")}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-lg mb-2">
                  Qual cargo você irá atuar? <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border-2 border-gray-300 rounded-full appearance-none checked:bg-[#022440] checked:border-[#022440] focus:outline-none"
                      {...register("role")}
                      value="Desenvolvedor Front-end"
                    />
                    <span className="text-md">Desenvolvedor Front-end</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border-2 border-gray-300 rounded-full appearance-none checked:bg-[#022440] checked:border-[#022440] focus:outline-none"
                      {...register("role")}
                      value="Desenvolvedor Back End"
                    />
                    <span className="text-md">Desenvolvedor Back End</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border-2 border-gray-300 rounded-full appearance-none checked:bg-[#022440] checked:border-[#022440] focus:outline-none"
                      {...register("role")}
                      value="Desenvolvedor Full Stack"
                    />
                    <span className="text-md">Desenvolvedor Full Stack</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border-2 border-gray-300 rounded-full appearance-none checked:bg-[#022440] checked:border-[#022440] focus:outline-none"
                      {...register("role")}
                      value="UX Designer"
                    />
                    <span className="text-md">UX Designer</span>
                  </label>
                </div>
                {errors.role && <p className="text-red-500 text-sm">{errors.role?.message}</p>}
              </div>

              <div className="mb-2">
                <label htmlFor="about" className="block text-lg">
                  Nos conte mais sobre você<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="about"
                  className={`w-full mt-2 bg-[#f9f9f9] text-[#022440] border ${errors.skills ? 'border-red-500' : 'border-[#ddd]'} rounded-lg`}
                  placeholder="Conte-nos um pouco mais sobre sua experiência"
                  rows={3}
                  {...register("skills")}
                ></textarea>
                {errors.skills && <p className="text-red-500 text-sm">{errors.skills.message}</p>}
              </div>

              <div className="text-center w-full">
                {isSubmitted ? (
                  <p className="text-green-500 text-xl">Mensagem enviada com sucesso!</p>
                ) : (
                  <SecondaryButton type="submit">Faça parte</SecondaryButton>
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

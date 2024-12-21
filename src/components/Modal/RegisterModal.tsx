import "../../../index.css";
import close from "../../../assets/close.png";
import Logo from "../../../assets/logo.png";
import SecondaryButton from "../buttons/secondaryButton";

const Modal = ({ isOpen, closeModal }: { isOpen: boolean; closeModal: () => void }) => {
  if (!isOpen) return null;

  const contatos = [
    { id: 1, label: "E-mail", value: "contato@frontendfusion.com.br" },
    { id: 2, label: "WhatsApp", value: "+55 11 9 9999-8888" },
    { id: 3, label: "Localização", value: "Fortaleza, CE" },
  ];

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
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg">
                  Nome<span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-3 mt-0 bg-[#f9f9f9] text-[#022440] border border-[#ddd] rounded-lg"
                  placeholder="Seu Nome"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg">
                  E-mail<span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 mt-0 bg-[#f9f9f9] text-[#022440] border border-[#ddd] rounded-lg"
                  placeholder="Seu E-mail"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg">
                  Quais são suas habilidades?<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 mt-0 bg-[#f9f9f9] text-[#022440] border border-[#ddd] rounded-lg"
                  placeholder="Sua Mensagem"
                  rows={3}
                ></textarea>
              </div>

              {/* Checkbox de Cargo */}
              <div className="mb-4 ">
                <label className="block text-lg mb-2">
                  Qual cargo você irá atuar? <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="cargo1"
                      className="w-5 h-5 border-2 border-gray-300 rounded-full appearance-none checked:bg-[#022440] checked:border-[#022440] focus:outline-none"
                    />
                    <span className="text-md">Desenvolvedor Front-end</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="cargo1"
                      className="w-5 h-5 border-2 border-gray-300 rounded-full appearance-none checked:bg-[#022440] checked:border-[#022440] focus:outline-none"
                    />
                    <span className="text-md">Desenvolvedor Back End</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="cargo1"
                      className="w-5 h-5 border-2 border-gray-300 rounded-full appearance-none checked:bg-[#022440] checked:border-[#022440] focus:outline-none"
                    />
                    <span className="text-md">Desenvolvedor Full Stack</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="cargo1"
                      className="w-5 h-5 border-2 border-gray-300 rounded-full appearance-none checked:bg-[#022440] checked:border-[#022440] focus:outline-none"
                    />
                    <span className="text-md">UX Designer</span>
                  </label>
                </div>
              </div>

              {/* Outros campos */}
              <div className="mb-2">
                <label htmlFor="about" className="block text-lg">
                  Nos conte mais sobre você<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="about"
                  className="w-full mt-2 bg-[#f9f9f9] text-[#022440] border border-[#ddd] rounded-lg"
                  placeholder="Conte-nos um pouco mais sobre sua experiência"
                  rows={3}
                ></textarea>
              </div>
              <div className="text-center w-full ">
                <SecondaryButton onClick={closeModal}>Enviar</SecondaryButton>
              </div>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

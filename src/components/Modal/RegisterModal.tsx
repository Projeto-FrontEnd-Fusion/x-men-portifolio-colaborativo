// Modal.tsx
import "../../../index.css";
import trash from "../../assets/lixo.png";
import Logo from "../../assets/Logo.png";

const Modal = ({ isOpen, closeModal }: { isOpen: boolean; closeModal: () => void }) => {
  if (!isOpen) return null;

  const contatos = [
    { id: 1, label: "E-mail", value: "contato@frontendfusion.com.br" },
    { id: 2, label: "WhatsApp", value: "+55 11 9 9999-8888" },
    { id: 3, label: "Localização", value: "Fortaleza, CE" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className=" text-white p-8  w-11/12 md:w-4/5 lg:w-2/3">

        <header className="bg-[#2b3a4f] py-8">
          <div className="flex justify-between items-center  w-full lg:w-4/5 mx-auto">
            <img src={Logo} alt="Logotipo" className="h-10 md:h-12" />
            <button onClick={closeModal} className="bg-transparent focus:outline-none">
              <img src={trash} alt="Fechar Modal" className="h-8 w-8" />
            </button>
          </div>
        </header>


        <aside className="mt-0 max-w-2xl p-8 bg-[#022440]">
          <h2 className="text-3xl font-bold mb-4">Torne-se um Fusioner</h2>
          <p className="text-lg md:text-xl mb-44">Venha fazer parte desta jornada!</p>
          <ul className="space-y-4 mb-80">
            {contatos.map((contato) => (
              <li key={contato.id} className="flex flex-col">
                <span className="text-lg font-semibold">{contato.label}:</span>
                <span className="text-md">{contato.value}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Modal;

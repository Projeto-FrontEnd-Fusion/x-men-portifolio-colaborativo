// Modal.tsx
import "../../../index.css";
import trash from "../../assets/lixo.png";
import Logo from "../../assets/Logo.png";

const Modal = ({ isOpen, closeModal }: { isOpen: boolean; closeModal: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#022440] text-white p-8 rounded-lg max-w-lg w-full">
        <header className="bg-[#2b3a4f] w-full flex items-center justify-between px-4 py-6 shadow-md">
          <div className="flex items-center">
            <img src={Logo} alt="Logotipo" className="h-10 md:h-12" />
          </div>

          <button onClick={closeModal} className="bg-transparent focus:outline-none">
            <img src={trash} alt="Fechar Modal" className="h-8 w-8" />
          </button>
        </header>

        <section className="text-center mt-8">
          <h2 className="text-3xl font-bold mb-4">Torne-se um Fusioner</h2>
          <p className="text-lg md:text-xl mb-6">Venha fazer parte desta jornada!</p>

          <div className="space-y-4">
            <p>📧 contato@frontendfusion.com.br</p>
            <p>WhatsApp: +55 11 9 9999-8888</p>
            <p>Local: Fortaleza, CE</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Modal;

import { useState } from "react";
import frontendFusion from "../../../assets/frontend_fusion.png";
import githubIcon from "../../../assets/github_icon.png";
import linkedinIcon from "../../../assets/linkedin_icon.png";
import montain from "../../../assets/montain.jpg";
import Modal from "../../components/Modal/RegisterModal";

export default function LevelUpSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const email: string = "contato@frontendfusion.com.br";
  const phoneNumber: string = "+55 11 99999-8888";
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
  const whatsappMessage: string = "Olá, gostaria de mais informações sobre o projeto.";
  const whatsappUrl: string = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="levelUpSection" className="bg-[#022440] pt-[192px] justify-items-center text-[#eeeeee] max-w-[1728px]">
      <div className="flex max-w-[1146px] gap-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] grid-rows-[200px_200px] lg:grid-rows-[350px_1fr] lg:gap-x-16">
          <div className="order-1 max-w-[400px] md:pt-6 lg:max-w-[477px]">
            <h2 className="text-2xl lg:text-5xl tracking-tighter font-medium my-4 lg:my-6">
              Venha subir de nível com a gente!
            </h2>
            <p className="text-base lg:text-lg mb-4">
              Vamos transformar o aprendizado de desenvolvimento com inovação e
              divertimento. Assim como disse um grande sábio “A caminhada pode ser
              longa, mas a vista vale a pena”.
            </p>
          </div>


          <button
            type="button"
            className="order-3 mb-9 w-full md:max-w-[240px] font-semibold text-xl text-[#022440] bg-[#28EEED] rounded-lg px-8 py-2 max-h-[48px] drop-shadow-md md:mt-14 lg:mt-0"
            onClick={openModal}
          >
            Faça parte
          </button>


          <div className="w-full order-2 flex mt-8 md:pt-16">
            <div className="flex md:flex-col gap-5">
              <div className="socials flex flex-col md:flex-row w-full gap-8">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visite meu perfil no LinkedIn"
                  className="flex items-center gap-4 font-semibold text-xl"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-full outline outline-3 outline-[rgba(238,238,238,75%)]">
                    <img
                      src={linkedinIcon}
                      alt="Ícone do LinkedIn"
                      className="w-[17px] h-[18px]"
                    />
                  </span>
                  Linkedin
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visite meu perfil no GitHub"
                  className="flex items-center gap-4 font-semibold text-xl"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-full outline outline-3 outline-[rgba(238,238,238,75%)]">
                    <img
                      src={githubIcon}
                      alt="Ícone do GitHub"
                      className="w-[25px] h-[25px]"
                    />
                  </span>
                  GitHub
                </a>
              </div>

              <div className="contact flex flex-col w-full text-sm">
                <h3 className="text-sm lg:text-base uppercase mb-6 md:my-6">Nossos contatos</h3>

                <div className="flex flex-col gap-2 mb-2 md:mb-8">
                  <h4 className="text-sm lg:text-lg">E-mail</h4>
                  <a
                    href={`mailto:${email}`}
                    aria-label={`Enviar e-mail para ${email}`}
                    className="text-xs text-[#eeeeeeBF]"
                  >
                    {email}
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-sm lg:text-lg">WhatsApp</h4>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enviar mensagem no WhatsApp para ${phoneNumber}`}
                    className="text-xs text-[#eeeeeeBF]"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hidden lg:grid bg-cover bg-center opacity-50 h-[691px] w-[196px]"
          style={{ backgroundImage: `url(${montain})`, backgroundPosition: '43% 30%' }}
        ></div>
      </div>

      <div className="lg:bg-[#011628] px-4 pb-9 w-full flex justify-center">
        <img
          src={frontendFusion}
          alt="Imagem Frontend Fusion"
          className="w-full max-w-[1146px] mix-blend-soft-light"
        />
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </section>
  );
}

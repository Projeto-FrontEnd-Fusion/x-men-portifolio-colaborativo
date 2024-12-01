import "../../App.css";

const Aside = () => {
    return (
        <div className="w-[752px] h-[904px] bg-[#022440]">

            <h2 className="w-[459px] h-[60px] top-[199px] font-roboto font-bold text-[#ffffff] text-[32px] leading-[24px] ml-[0px] p-12 text-center">
                Torne-se um Fusioner.
            </h2>
            <p className="w-[589px] text-[#ffffff] text-[18px] font-roboto leading-none mt-[50px]  ml-[60px]  font-bold">
                Venha fazer parte desta envolvente jornada. Vamos juntos!
            </p>
            <div className="w-[400px] text-[#ffffff]  font-roboto leading-[29px] mt-[122px]  ml-[0px]  font-bold">
                <p className="font-roboto text-[18px] justify-items-start text-start leading[29px] ml-[65px] ">Entre em contato</p>
                <p className="font-roboto  justify-items-start text-start leading[29px] ml-[65px] ">contato@frontendfusion.com.br</p>
                <p className="font-roboto mt-[30px] justify-items-start text-start leading[29px] ml-[65px] ">WhatsApp</p>
                <p className="font-roboto justify-items-start text-start leading[29px] ml-[65px] ">+55 11 9 9999-8888</p>
                <p className="font-roboto mt-[30px] justify-items-start text-start leading[29px] ml-[65px] ">Brasil</p>
                <p className="font-roboto justify-items-start text-start leading[29px] ml-[65px] ">Fortaleza, CE</p>
            </div>
        </div>
    );
};

export default Aside;

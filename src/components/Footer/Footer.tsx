import ScrollToTopButton from "../buttons/ScrollToTopButton";

export default function Footer() {
  return (
    <footer className="justify-items-center text-xs lg:text-sm text-[#eeeeee] max-w-[1728px] px-4 py-5 bg-[#2B3A4F] lg:bg-[#022440]">
      <div className="w-full grid grid-cols-1 md:grid-cols-[230px_270px_130px] max-w-[1146px] items-center justify-between md:px-4">
        <div className="col-span-2 md:col-span-1">
          <p>
            Frontend Fusion<span className="ml-4 mr-2.5">●</span><span className="text-[#EEEEEEBF]">2023 - 2024</span>
          </p>
        </div>
        <div className="flex items-end md:items-center gap-8">
          <span className="text-[#EEEEEEBF]">Tecnologia</span>
          <span className="text-[#EEEEEEBF]">Inovação</span>
          <span className="text-[#EEEEEEBF]">Interação</span>
        </div>
        <ScrollToTopButton />
      </div>
    </footer>
  );
}

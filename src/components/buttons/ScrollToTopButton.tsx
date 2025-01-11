import upArrow from "../../../assets/up_arrow_icon.png";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className="flex flex-col gap-2 md:flex-row items-center"
      onClick={scrollToTop}
    >
      <div>
        <img
          src={upArrow}
          alt="Back to top"
          className="w-[24.35px] h-6"
        />
      </div>
      <span>Voltar ao topo</span>
    </button>
  );
};

export default ScrollToTopButton;

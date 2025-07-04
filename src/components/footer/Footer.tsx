import React from "react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer>
      <div>
        <p>
          Frontend Fusion <span>•</span> 2023 - 2025
        </p>
      </div>

      <div>
        <span>Tecnologia</span>
        <span>Inovação</span>
        <span>Interação</span>
      </div>

      <div>
        <button onClick={scrollToTop}>Voltar ao topo</button>
      </div>
    </footer>
  );
};

export default Footer;

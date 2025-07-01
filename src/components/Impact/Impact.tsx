import React from "react";
import Vector from "../../assets/Vector.svg";

function Impact() {
  const impacts = [
    {
      title: "+ 8 meses",
      description:
        "Levando aprendizado aos entusiastas de tecnologia e juniores",
    },
    {
      title: "+ 50 colaboradores",
      description:
        "Equipes compostas por desenvolvedores e designers trabalhando com garra",
    },
    {
      title: "+ 100 projetos",
      description:
        "Sempre trabalhando de forma conjunta para levar o melhor resultado possível",
    },
  ];

  return (
    <section className="text-white w-full py-12 bg-[#022440]">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto max-w-7xl px-4">
        {impacts.map((impact, index) => (
          <li key={index}>
            <article className="bg-[#2b3a4f] p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-center flex flex-col items-center">
              <div className="flex  items-center justify-center gap-2 mb-4">
                <img src={Vector} className="w-8 " alt="Imagem de um raio" />
                <h3 className="text-2xl size- font-bold mb-2">
                  {impact.title}
                </h3>
              </div>

              <p className="text-gray-300 text-base justify-start ">{impact.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Impact;

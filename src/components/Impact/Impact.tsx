import React from "react";
import Vector from "../../assets/Vector.svg";
import Trofeu from "../../assets/Trofeu.svg";

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
    <section className="text-white  w-full py-12 bg-[#022440] ">
      <ul className="flex flex-col semi:flex-row semi:flex-wrap custom:flex-nowrap gap-6 mx-auto max-w-7xl px-4">
        {impacts.map((impact, index) => (
          <li
            key={index}
            className="min-w-[250px] w-full semi:w-[calc(50%-0.75rem)] custom:w-[calc(33.333%-1rem)]"
          >
            <article className="min-w-[250px] w-full sm:bg-[#2b3a4f] bg-transparent p-6 rounded-2xl transition duration-300 text-left flex flex-col items-start sm:items-center">
              <img
                src={Trofeu}
                className="w-6 mb-2 sm:hidden"
                alt="Imagem de um troféu"
              />
              <div className="hidden sm:flex items-center justify-center gap-2 mb-4">
                <img src={Vector} className="w-9" alt="Imagem de um raio" />
                <h3 className="text-2xl  font-bold mb-0">{impact.title}</h3>
              </div>
              <h3 className="text-3xl font-medium mb-2 block sm:hidden">
                {impact.title}
              </h3>
              <p className="text-gray-300  justify-start">
                {impact.description}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Impact;

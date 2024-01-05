import React, { useState } from "react";
import SobreMi from "./SobreMi";
import Educacion from "./Educacion";
import Habilidades from "./Habilidades";
import Experiencia from "./Experiencia";

export default function About() {
  const [aboutFilter, setAboutFilter] = useState("ABOUT");
  return (
    <section className="lg:h-screen flex bg-[#22282f] py-14 lg:py-0">
      <div className="w-[1140px] flex flex-col items-center justify-center mx-auto">
        <h2 className="text-white text-4xl text-right mb-10">
          {
            {
              ABOUT: "Sobre mi",
              EDUCACION: "Educación",
              HABILIDADES: "Habilidades",
              EXPERIENCIA: "Experiencia",
            }[aboutFilter]
          }
        </h2>
        <div className="lg:w-[1240px] w-full flex flex-col lg:flex-row lg:items-center lg:justify-between px-8 lg:px-0">
          <div className="bg-[#1b1f24] h-96  w-full lg:w-[33%] flex flex-col items-center justify-center  py-7 px-8 rounded-lg ">
            <div
              className="border-b border-solid border-[#13bbff] w-full text-center text-lg cursor-pointer pt-6"
              onClick={() => setAboutFilter("ABOUT")}
            >
              <button
                className={`${
                  aboutFilter === "ABOUT" && "text-[#13bbff]"
                } mb-5 cursor-pointer`}
              >
                Sobre mi
              </button>
            </div>
            <div
              className="border-b border-solid border-[#13bbff] w-full text-center text-lg cursor-pointer pt-6"
              onClick={() => setAboutFilter("EDUCACION")}
            >
              <button
                className={`${
                  aboutFilter === "EDUCACION" && "text-[#13bbff]"
                } mb-5 cursor-pointer`}
              >
                Educación
              </button>
            </div>
            <div
              className="border-b border-solid border-[#13bbff] w-full text-center text-lg cursor-pointer pt-6"
              onClick={() => setAboutFilter("HABILIDADES")}
            >
              <button
                className={`${
                  aboutFilter === "HABILIDADES" && "text-[#13bbff]"
                } mb-5 cursor-pointer`}
              >
                Habilidades
              </button>
            </div>
            <div
              onClick={() => setAboutFilter("EXPERIENCIA")}
              className="w-full text-center text-lg cursor-pointer pt-6"
            >
              <button
                className={`${
                  aboutFilter === "EXPERIENCIA" && "text-[#13bbff]"
                } mb-5 cursor-pointer`}
              >
                Experiencia
              </button>
            </div>
          </div>
          <div className="bg-[#1b1f24] h-full lg:h-[425px] w-full mt-14 lg:mt-0 lg:w-[65%] rounded-lg">
            {
              {
                ABOUT: <SobreMi />,
                EDUCACION: <Educacion />,
                HABILIDADES: <Habilidades />,
                EXPERIENCIA: <Experiencia />,
              }[aboutFilter]
            }
          </div>
        </div>
      </div>
    </section>
  );
}

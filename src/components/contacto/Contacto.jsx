import React from "react";
import useMenu from "../../hooks/useMenu";

export default function Contacto() {
  const { abrirCorreo } = useMenu();
  return (
    <section
      className="lg:h-screen my-20 lg:mt-0 flex items-center justify-center"
      id="contact"
    >
      <div className="lg:w-[1240px] w-full flex flex-col items-center">
        <h2 className="text-center text-3xl lg:text-6xl font-bold mb-10 text-[#13bbff] ">
          ¡Saludame!
        </h2>
        <p className="lg:w-1/2 mx-16 lg:mx-0 lg:text-xl text-center text-[#c3cad5]">
          Estaré encantado de recibir tu contacto si quieres conversar acerca de
          nuevas oportunidades. Escríbeme, y te responderé tan pronto como vea
          tu mensaje.
        </p>
        <button
          className="mt-10 inline-block px-7 py-3 bg-[#13bbff] text-[#1b1f24] border-2 border-[#13bbff] rounded-lg font-semibold text-[15px] transition-all duration-500 ease-in-out hover:bg-transparent hover:text-[#13bbff]"
          onClick={abrirCorreo}
        >
          Contacto
        </button>
      </div>
    </section>
  );
}

import React from "react";

export default function Experiencia() {
  return (
    <section className="flex flex-col lg:flex-row items-center h-full justify-center mx-10 gap-x-4 gap-y-10 md:gap-y-0">
      <div className="bg-[#22282f] px-8 py-6 rounded-md w-1/2">
        <div className="flex gap-y-2 flex-col  ">
          <h4 className="border-l border-solid border-[#13bbff] w-full pl-3">
            2022 - Actualidad
          </h4>
          <h5 className="text-[#13bbff] text-xl">
            Full Stack Developer - Workana
          </h5>
          <p className="leading- leading-7">
            Desarrollo de aplicaciones web y plataformas utilizando tecnologías
            como Angular, React, Laravel y Node.js. Colaboración con clientes
            para entender sus necesidades, y así diseñar soluciones tecnológicas
            efectivas. Implementación de funcionalidades front-end y back-end,
            asegurando la usabilidad y la eficiencia del producto final.
          </p>
        </div>
      </div>
      <div className="bg-[#22282f] px-8 py-6 rounded-md w-1/2">
        <div className="flex gap-y-2 flex-col  ">
          <h4 className="border-l border-solid border-[#13bbff] w-full pl-3">
            2023 - Actualidad
          </h4>
          <h5 className="text-[#13bbff] text-xl">
            Full Stack Developer - GlobalJobs
          </h5>
          <p className="leading- leading-7">
            contribuyo al desarrollo y resolución de errores en una plataforma
            integral de ventas y asesorías de cursos SAPP, construida con
            Angular y Laravel. Mi responsabilidad incluye el desarrollo continuo
            de la plataforma, así como la identificación y solución eficiente de
            problemas para garantizar un rendimiento óptimo.
          </p>
        </div>
      </div>
    </section>
  );
}

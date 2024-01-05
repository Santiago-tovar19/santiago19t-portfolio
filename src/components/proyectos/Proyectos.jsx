import React from "react";

export default function Proyectos() {
  return (
    <section className="w-full py-16 bg-[#22282f] flex flex-col items-center justify-center">
      <h2 className="text-4xl mb-10">Mas proyectos</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center justify-center lg:w-[1240px] px-10 gap-10">
        <div className="bg-[#1b1f24] py-4 px-6 flex flex-col gap-y-5 rounded-lg border-b border-solid border-[#13bbff] hover:transform hover:-translate-y-2 hover:transition-transform duration-500">
          <div className="flex justify-between">
            <span className="text-5xl text-[#13bbff] ">
              <i class="ri-folder-2-line"></i>
              {/* <i class="ri-folder-5-fill"></i> */}
            </span>
            <span className="text-3xl flex gap-x-4 text-[#abb0b8]">
              <a
                href="https://react-datetable-santiago19t.netlify.app"
                target="_blank"
              >
                <i class="ri-arrow-right-up-fill"></i>
              </a>
              <a
                href="https://github.com/Santiago-tovar19/react-datetable"
                target="_blank"
              >
                <i class="ri-github-line"></i>
              </a>
            </span>
          </div>

          <h3 className="text-2xl">DateTable</h3>
          <p className="leading-7 text-[#c3cad5]">
            Desarrollado utilizando React, Datetable es una aplicación versátil
            que presenta datos de manera organizada y eficiente. Esta aplicación
            incorpora un moderno datepicker para facilitar la selección de
            fechas, junto con una tabla informativa que muestra registros
            detallados de personas, incluyendo nombre, apellido, edad y estado
          </p>
          <div className="flex gap-x-6 text-[#13bbff] font-bold">
            <span>React</span>
            <span>Tailwind</span>
            <span>datepicker</span>
          </div>
        </div>
        <div className="bg-[#1b1f24] py-4 px-6 flex flex-col gap-y-5 rounded-lg border-b border-solid border-[#13bbff] hover:transform hover:-translate-y-2 hover:transition-transform duration-500">
          <div className="flex justify-between">
            <span className="text-5xl text-[#13bbff] ">
              <i class="ri-folder-2-line"></i>
              {/* <i class="ri-folder-5-fill"></i> */}
            </span>
            <span className="text-3xl flex gap-x-4 text-[#abb0b8]">
              <a
                href="https://react-landing-home-santiago19t.netlify.app"
                target="_blank"
              >
                <i class="ri-arrow-right-up-fill"></i>
              </a>
              <a
                href="https://github.com/Santiago-tovar19/react-landing-page"
                target="_blank"
              >
                <i class="ri-github-line"></i>
              </a>
            </span>
          </div>

          <h3 className="text-2xl">Landing Home</h3>
          <p className="leading-7 text-[#c3cad5]">
            Desarrollado con Tailwind CSS, Landing Home es una página web
            centrada en servicios de diseño gráfico y productos digitales.
            Ofreciendo soluciones como el rediseño de páginas, brinda una
            experiencia atractiva y funcional para aquellos que buscan servicios
            de diseño con un toque moderno y profesional.
          </p>
          <div className="flex gap-x-6 text-[#13bbff] font-bold">
            <span>React</span>
            <span>Tailwind</span>
          </div>
        </div>
        <div className="bg-[#1b1f24] py-4 px-6 flex flex-col gap-y-5 rounded-lg border-b border-solid border-[#13bbff] hover:transform hover:-translate-y-2 hover:transition-transform duration-500">
          <div className="flex justify-between">
            <span className="text-5xl text-[#13bbff] ">
              <i class="ri-folder-2-line"></i>
              {/* <i class="ri-folder-5-fill"></i> */}
            </span>
            <span className="text-3xl flex gap-x-4 text-[#abb0b8]">
              <a
                href="https://cotizador-cripto-santiago19t.netlify.app"
                target="_blank"
              >
                <i class="ri-arrow-right-up-fill"></i>
              </a>
              <a href="" target="_blank">
                <i class="ri-github-line"></i>
              </a>
            </span>
          </div>

          <h3 className="text-2xl">CriptoCotize</h3>
          <p className="leading-7 text-[#c3cad5]">
            Un cotizador automático de criptomonedas, desarrollado con acceso a
            datos en tiempo real a través de una API. Ofrece la posibilidad de
            elegir entre diversas monedas y criptomonedas, garantizando
            información siempre actualizada. Facilita a los usuarios seguir de
            cerca las tasas de cambio con una interfaz intuitiva.
          </p>
          <div className="flex gap-x-6 text-[#13bbff] font-bold">
            <span>Vanilla Javascript</span>
            <span>CSS</span>
          </div>
        </div>
        <div className="bg-[#1b1f24] py-4 px-6 flex flex-col gap-y-5 rounded-lg border-b border-solid border-[#13bbff] hover:transform hover:-translate-y-2 hover:transition-transform duration-500">
          <div className="flex justify-between">
            <span className="text-5xl text-[#13bbff] ">
              <i class="ri-folder-2-line"></i>
              {/* <i class="ri-folder-5-fill"></i> */}
            </span>
            <span className="text-3xl flex gap-x-4 text-[#abb0b8]">
              <a
                href="https://gif-app-santiago-tovar.netlify.app"
                target="_blank"
              >
                <i class="ri-arrow-right-up-fill"></i>
              </a>
              <a
                href="https://github.com/Santiago-tovar19/GifApp-React"
                target="_blank"
              >
                <i class="ri-github-line"></i>
              </a>
            </span>
          </div>

          <h3 className="text-2xl">GifsApp</h3>
          <p className="leading-7 text-[#c3cad5]">
            Desarrollada con React y Bootstrap, gifsApp es una aplicación que
            ofrece una experiencia inmersiva al buscar gifs por palabras clave.
            Su buscador intuitivo permite explorar una amplia variedad de temas.
            Los resultados se almacenan, permitiendo acceder fácilmente a las
            búsquedas anteriores sin abandonar la página.
          </p>
          <div className="flex gap-x-6 text-[#13bbff] font-bold">
            <span>React</span>
            <span>Bootstrap</span>
          </div>
        </div>
        <div className="bg-[#1b1f24] py-4 px-6 flex flex-col gap-y-5 rounded-lg border-b border-solid border-[#13bbff] hover:transform hover:-translate-y-2 hover:transition-transform duration-500">
          <div className="flex justify-between">
            <span className="text-5xl text-[#13bbff] ">
              <i class="ri-folder-2-line"></i>
              {/* <i class="ri-folder-5-fill"></i> */}
            </span>
            <span className="text-3xl flex gap-x-4 text-[#abb0b8]">
              <a
                href="https://movie-app-2-santiago19t.netlify.app"
                target="_blank"
              >
                <i class="ri-arrow-right-up-fill"></i>
              </a>
              <a href="" target="_blank">
                <i class="ri-github-line"></i>
              </a>
            </span>
          </div>

          <h3 className="text-2xl">MovieApp</h3>
          <p className="leading-7 text-[#c3cad5]">
            Es una aplicación de búsqueda de películas ofrece una experiencia
            eficiente y fácil de usar. Con un buscador que muestra búsquedas
            relacionadas en tiempo real, al hacer clic en una película, se
            despliega información detallada obtenida de una API. Descubre
            actores, valoraciones, año de estreno y más, todo desde una interfaz
            sencilla y rápida.
          </p>
          <div className="flex gap-x-6 text-[#13bbff] font-bold">
            <span>Vanilla Javascrip</span>
            <span>CSS</span>
            <span>API</span>
          </div>
        </div>
        <div className="bg-[#1b1f24] py-4 px-6 flex flex-col gap-y-5 rounded-lg border-b border-solid border-[#13bbff] hover:transform hover:-translate-y-2 hover:transition-transform duration-500">
          <div className="flex justify-between">
            <span className="text-5xl text-[#13bbff] ">
              <i class="ri-folder-2-line"></i>
              {/* <i class="ri-folder-5-fill"></i> */}
            </span>
            <span className="text-3xl flex gap-x-4 text-[#abb0b8]">
              <a
                href="https://movie-app-2-santiago19t.netlify.app"
                target="_blank"
              >
                <i class="ri-arrow-right-up-fill"></i>
              </a>
              <a href="" target="_blank">
                <i class="ri-github-line"></i>
              </a>
            </span>
          </div>

          <h3 className="text-2xl">Pokedex-Javascript</h3>
          <p className="leading-7 text-[#c3cad5]">
            Desarrollada con Vanilla JavaScript, esta Pokedex utiliza la API de
            PokeAPI para mostrar a los Pokémon de forma paginada Con un
            atractivo diseño, cada Pokémon se presenta en una tarjeta con
            estadísticas visuales. Al hacer clic en la tarjeta, se revela
            información adicional sobre el Pokémon, brindando a los usuarios una
            experiencia completa y detallada.
          </p>
          <div className="flex gap-x-6 text-[#13bbff] font-bold">
            <span>Vanilla Javascript</span>
            <span>Css</span>
            <span>PokeApi</span>
          </div>
        </div>
      </div>
    </section>
  );
}

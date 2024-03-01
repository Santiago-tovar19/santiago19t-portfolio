import React, { useState } from "react";
import useMenu from "../hooks/useMenu";

export default function Header() {
  const { showMenu, setShowMenu, abrirCorreo, handleClickMenu } = useMenu();
  console.log(showMenu);
  return (
    <>
      <header
        className="fixed top-4 left-0 right-0 z-999 flex items-center justify-between bg-transparent transition-all p-10 md:p-4 mx-4 md:mx-auto"
        style={{ maxWidth: "1240px", marginLeft: "auto", marginRight: "auto" }}
      >
        <a href="#" class="bg text-[36px] text-[#fff] ">
          Dev <span className="text-[#13bbff] ">S.</span>
        </a>
        <div
          className="bx bx-menu ml-24 md:ml-0 text-4xl z-9999 cursor-pointer lg:hidden"
          id="menu-icon"
          onClick={() => setShowMenu(!showMenu)}
        ></div>
        <ul
          className={` fixed  w-[80%] xl:w-full md:w-[40%] h-full bg-[#22282f] lg:bg-transparent ${
            showMenu ? "right-0" : "-right-full text-r"
          } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 trasnition-all duration-500   z-[99999px]`}
        >
          <i
            class="bx bx-x relative -top-20 right-24 text-5xl lg:hidden"
            onClick={() => setShowMenu(!showMenu)}
          ></i>
          <li>
            <a
              href="#home"
              className="text-lg  font-medium text-[#c3cad5] ml-10 transition-all hover:text-[#13bbff] "
              onClick={() => setShowMenu(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#sobre-mi"
              className="text-lg  font-medium text-[#c3cad5] ml-10 transition-all hover:text-[#13bbff] "
              onClick={() => setShowMenu(false)}
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#portafolio"
              className="text-lg  font-medium text-[#c3cad5] ml-10 transition-all hover:text-[#13bbff] "
              onClick={() => setShowMenu(false)}
            >
              Portafolio
            </a>
          </li>
          <li>
            <a
              href="#proyectos"
              className="text-lg  font-medium text-[#c3cad5] ml-10 transition-all hover:text-[#13bbff] "
              onClick={() => setShowMenu(false)}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-lg  font-medium text-[#c3cad5] ml-10 transition-all hover:text-[#13bbff] "
              onClick={() => setShowMenu(false)}
            >
              Contacto
            </a>
          </li>
        </ul>

        <div class="top-btnn">
          <a
            href="#"
            class={`
            py-2 px-6 bg-transparent text-[#13bbff] border-2 border-[#13bbff] rounded-lg font-semibold text-15 transition-all duration-500 ease-in-out hover:bg-[#13bbff] hover:text-[#1b1f24] ${
              showMenu ? "" : "transform hover:scale-110 hidden md:block -z-50"
            }
            `}
            onClick={() => abrirCorreo()}
          >
            Contactame
          </a>
        </div>
      </header>
    </>
  );
}

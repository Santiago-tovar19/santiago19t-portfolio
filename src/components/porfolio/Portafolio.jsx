import React from "react";
import "./portafolio.css";
import quiosco from "../../assets/proyectos/Screenshot_841.png";
import devjobs from "../../assets/proyectos/Screenshot_847.png";
import journal from "../../assets/proyectos/Screenshot_842.png";
import delivered from "../../assets/proyectos/Screenshot_843.png";
import eccomerce from "../../assets/proyectos/Screenshot_844.png";
import fq from "../../assets/proyectos/Screenshot_846.png";
import gestor from "../../assets/proyectos/Screenshot_848.png";
import generador from "../../assets/proyectos/Screenshot_849.png";
import pokedex from "../../assets/proyectos/Screenshot_851.png";
import calend from "../../assets/proyectos/Screenshot_863.png";
import TesloShop from "../../assets/proyectos/Screenshot_1919.png";

export default function Portafolio() {
  return (
    <section class="portfolio bg-[#1b1f24]  py-20 " id="portafolio">
      <div class="center-text">
        <h2 className="text-4xl mb-10">
          <span>Portafolio</span>
        </h2>
      </div>
      <div class="portfolio-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[1240px] px-10 justify-center items-center">
        <a
          class="row md:w-full lg:w-[95%]"
          href="https://quiosco-app-santiago19t.netlify.app/"
          target="_blank"
        >
          <img className="h-full" src={quiosco} alt="h-full" />
          <div class="main-row">
            <div class="row-text">
              <h5>Quiosco App</h5>
            </div>
            <div class="row-icon">
              <a href="https://github.com/Santiago-tovar19/quiosco-frontend" target="_blank">
                {" "}
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-2 gap-y-4 mt-4">
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              React
            </span>
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              Php
            </span>
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              Laravel
            </span>
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              Tailwind
            </span>
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              MySql
            </span>
          </div>
        </a>
        <a
          class="row md:w-full lg:w-[95%]"
          href="https://next-teslo-shop-santiago19t.vercel.app/"
          target="_blank"
        >
          <img src={TesloShop} alt="" />
          <div class="main-row">
            <div class="row-text">
              <h5>Teslo | Shop</h5>
            </div>
            <div class="row-icon">
              <a href="https://github.com/Santiago-tovar19/next-teslo-shop" target="_blank">
                {" "}
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-4 gap-y-4 mt-4">
            <span className="col-span-1 text-white border-b-4  border-[#075fe4]  text-center font-bold">
              NextJs
            </span>
            <span className="col-span-1 text-white border-b-4  border-[#075fe4] text-center font-bold">
              Postgres
            </span>
            <span className="col-span-1 text-white border-b-4  border-[#075fe4] text-center font-bold">
              Prisma
            </span>
            <span className="col-span-1 text-white border-b-4  border-[#075fe4] text-center font-bold">
              Tailwind
            </span>
            <span className="col-span-1 text-white border-b-4  border-[#075fe4] text-center font-bold">
              Eccomerce
            </span>
            <span className="col-span-1 text-white border-b-4  border-[#075fe4] text-center font-bold">
              typeScript
            </span>
          </div>
        </a>
        {/* <a class="row md:w-full lg:w-[95%]">
          <img src={devjobs} alt="" />
          <div class="main-row">
            <div class="row-text">
              <h5>DevJobs</h5>
            </div>
            <div class="row-icon">
              <i class="ri-github-fill"></i>
            </div>
          </div>
          <h4>Aplicación para buscar empleo remoto </h4>
        </a> */}
        <a
          class="row md:w-full lg:w-[95%]"
          href="https://react-pokedex-app-santiago19t.netlify.app/"
          target="_blank"
        >
          <img src={pokedex} alt="" />
          <div class="main-row">
            <div class="row-text">
              <h5>Pokedex</h5>
            </div>
            <div class="row-icon">
              <a href="https://github.com/Santiago-tovar19/react-pokedex-app" target="_blank">
                {" "}
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-2 gap-y-4 mt-4">
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              React
            </span>
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              PokeAPI
            </span>
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              Router
            </span>
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              Pokedex
            </span>
          </div>
        </a>
        {/* <a
          class="row md:w-full lg:w-[95%]"
          href="https://react-pokedex-app-santiago19t.netlify.app/"
          target="_blank"
        >
          <img src={pokedex} alt="" />
          <div class="main-row">
            <div class="row-text">
              <h5>Pokedex</h5>
            </div>
            <div class="row-icon">
              <a href="https://github.com/Santiago-tovar19/react-pokedex-app" target="_blank">
                {" "}
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-2 gap-y-4 mt-4">
            <span className="col-span-1 text-white border-[3px] border-[#075fe4] rounded-xl text-center font-bold">
              React
            </span>
            <span className="col-span-1 text-white border-[3px] border-[#075fe4] rounded-xl text-center font-bold">
              PokeAPI
            </span>
            <span className="col-span-1 text-white border-[3px] border-[#075fe4] rounded-xl text-center font-bold">
              Router
            </span>
            <span className="col-span-1 text-white border-[3px] border-[#075fe4] rounded-xl text-center font-bold">
              Pokedex
            </span>
          </div>
        </a> */}
        <a
          class="row md:w-full lg:w-[95%]"
          href="https://react-journal-app-santiago19t.netlify.app/"
          target="_blank"
        >
          <img src={journal} alt="" />
          <div class="main-row">
            <div class="row-text">
              <h5>Journal App</h5>
            </div>
            <div class="row-icon">
              <a href="https://github.com/Santiago-tovar19/react-journal-app" target="_blank">
                {" "}
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-x-2 gap-y-4 mt-4">
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              React
            </span>
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              MaterialUi
            </span>

            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              MaterialUi
            </span>
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              Firebase
            </span>
          </div>
        </a>

        <a
          class="row md:w-full lg:w-[95%]"
          href="https://santiago19t-food-app.netlify.app"
          target="_blank"
        >
          <img src={delivered} alt="" />
          <div class="main-row">
            <div class="row-text">
              <h5>Delivered food page</h5>
            </div>
            <div class="row-icon">
              <a
                href="https://github.com/Santiago-tovar19/react-delivered-foods-page"
                target="_blank"
              >
                {" "}
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-2 gap-y-4 mt-4">
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              React
            </span>
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              Tailwind
            </span>
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              Diseño
            </span>
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              Filtros
            </span>
          </div>
        </a>
        <a
          class="row md:w-full lg:w-[95%]"
          href="https://calendar-app-santiago19t.netlify.app"
          target="_blank"
        >
          <img src={calend} alt="" />
          <div class="main-row">
            <div class="row-text">
              <h5>CalendarApp</h5>
            </div>
            <div class="row-icon">
              <a href="https://github.com/Santiago-tovar19/react-calendar-app" target="_blank">
                {" "}
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-2 gap-y-4 mt-4">
            <span className="col-span-1 text-white border-b-4  border-[#075fe4] text-center font-bold">
              React
            </span>
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              Nodejs
            </span>
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              Express
            </span>
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              Redux
            </span>
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              Calendar
            </span>
            <span className="col-span-1 text-white  border-b-4  border-[#075fe4] text-center font-bold">
              Router
            </span>
          </div>
        </a>

        <a
          class="row md:w-full lg:w-[95%]"
          href="https://react-user-gestor-app-santiago19t.netlify.app"
          target="_blank"
        >
          <img src={gestor} alt="" />
          <div class="main-row">
            <div class="row-text">
              <h5>Gestor de Usuarios</h5>
            </div>
            <div class="row-icon">
              <a
                href="https://github.com/Santiago-tovar19/react-user-gestor-app"
                target="_blank"
              >
                {" "}
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-2 gap-y-4 mt-4">
            <span className="col-span-1 text-white border-b-4  border-[#075fe4] text-center font-bold mb-1">
              React
            </span>
            <span className="col-span-1 text-white border-b-4  border-[#075fe4] text-center font-bold mb-1">
              Firebase
            </span>
            <span className="col-span-1 text-white border-b-4  border-[#075fe4] text-center font-bold mb-1">
              Gestor
            </span>
          </div>
        </a>
        <a
          class="row md:w-full lg:w-[95%]"
          href="https://passwordgenerator-app-santiago-tovar.netlify.app"
          target="_blank"
        >
          <img src={generador} alt="" />
          <div class="main-row">
            <div class="row-text">
              <h5>PassWord Generator </h5>
            </div>
            <div class="row-icon">
              <a href="https://github.com/Santiago-tovar19/password-generator" target="_blank">
                {" "}
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-2 gap-y-4 mt-4">
            <span className="col-span-1 text-white border-b-4  border-[#075fe4] text-center font-bold mb-1">
              JavaScript
            </span>
            <span className="col-span-1 text-white border-b-4  border-[#075fe4] text-center font-bold mb-1">
              Algoritmos
            </span>
            <span className="col-span-1 text-white border-b-4  border-[#075fe4] text-center font-bold mb-1">
              CSS
            </span>
          </div>
        </a>

        <a
          class="row md:w-full lg:w-[95%]"
          href="https://faq-santiago19t.netlify.app"
          target="_blank"
        >
          <img src={fq} alt="" />
          <div class="main-row">
            <div class="row-text">
              <h5>Acordeón de PF</h5>
            </div>
            <div class="row-icon">
              <a href="https://github.com/Santiago-tovar19/fqu-accordion" target="_blank">
                {" "}
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-2 gap-y-4 mt-4">
            <span className="col-span-1 text-white border-b-4  border-[#075fe4] text-center font-bold mb-1">
              FAQ
            </span>
            <span className="col-span-1 text-white border-b-4  border-[#075fe4] text-center font-bold mb-1">
              Javascript
            </span>
            <span className="col-span-1 text-white border-b-4  border-[#075fe4] text-center font-bold mb-1">
              Frecuentes
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}

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

export default function Portafolio() {
  return (
    <section class="portfolio bg-[#1b1f24]  py-20 " id="portfolio">
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
              <a
                href="https://github.com/Santiago-tovar19/quiosco-frontend"
                target="_blank"
              >
                {" "}
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
          <h4>Aplicación web de un quiosco de comida</h4>
        </a>
        <a class="row md:w-full lg:w-[95%]">
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
        </a>
        <a
          class="row md:w-full lg:w-[95%]"
          href="https://projects.andresjosehr.com/dev-jobs/"
          target="_blank"
        >
          <img src={pokedex} alt="" />
          <div class="main-row">
            <div class="row-text">
              <h5>Pokedex</h5>
            </div>
            <div class="row-icon">
              <a
                href="https://github.com/Santiago-tovar19/devjobs"
                target="_blank"
              >
                {" "}
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
          <h4>Pokedex hecho con react-router</h4>
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
          <h4>Maquetación de sitio web sobre comida</h4>
        </a>
        <a
          class="row md:w-full lg:w-[95%]"
          href="https://santiago19t-eccomerce-shop.netlify.app"
          target="_blank"
        >
          <img src={eccomerce} alt="" />
          <div class="main-row">
            <div class="row-text">
              <h5>Eccomerce website</h5>
            </div>
            <div class="row-icon">
              <a
                href="https://github.com/Santiago-tovar19/react-eccomerce-shop"
                target="_blank"
              >
                {" "}
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
          <h4>Eccomerce hecho con react</h4>
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
          <h4>Gestor de usuarios hecho con react </h4>
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
              <a href="https://github.com/Santiago-tovar19" target="_blank">
                {" "}
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
          <h4>Generador de contraseñas</h4>
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
              <a
                href="https://github.com/Santiago-tovar19/react-calendar-app"
                target="_blank"
              >
                {" "}
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
          <h4>desarrollado con React y NodeJs</h4>
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
              <a href="https://github.com/Santiago-tovar19" target="_blank">
                {" "}
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
          <h4>Acordeón de preguntas frecuentes</h4>
        </a>
      </div>
    </section>
  );
}

import React from "react";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JavaScript from "../../assets/javascript.png";
import ReactImg from "../../assets/react.png";
import Node from "../../assets/node.png";
import FireBase from "../../assets/firebase.png";
import GitHub from "../../assets/github.png";
import Tailwind from "../../assets/tailwind.png";
import Mongo from "../../assets/mongo.png";
import Angular from "../../assets/angular3.png";
import PHP from "../../assets/php5.png";
import laravel from "../../assets/laravel.png";
import node2 from "../../assets/node2.png";
import next from "../../assets/next.png";
import typescript from "../../assets/typescript.png";
import typescript2 from "../../assets/typescript2.png";

export default function Habilidades() {
  return (
    <div className="flex flex-col items-center h-full justify-center mx-10 gap-x-16">
      <div className="w-full flex items-start flex-col">
        <p className="pt-4">// Estas son algunas de las tecnologias que manejo</p>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
        {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-12 mx-auto" src={HTML} alt="HTML icon" />
          <p className="my-4">HTML</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-12 mx-auto" src={CSS} alt="HTML icon" />
          <p className="my-4">CSS</p>
        </div> */}

        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-12 mx-auto" src={JavaScript} alt="HTML icon" />
          <p className="my-4">JavaScript</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-12 mx-auto bg-white" src={typescript2} alt="HTML icon" />
          <p className="my-4">TypeScript</p>
        </div>

        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-12 mx-auto" src={PHP} alt="HTML icon" />
          <p className="my-4">Php</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-12 mx-auto" src={node2} alt="HTML icon" />
          <p className="my-4">Node js</p>
        </div>

        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-12 mx-auto" src={ReactImg} alt="HTML icon" />
          <p className="my-4">React</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-12 mx-auto" src={next} alt="HTML icon" />
          <p className="my-4">NextJs</p>
        </div>
        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-12  mx-auto" src={Angular} alt="HTML icon" />
          <p className="my-4">Angular</p>
        </div>

        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-12 mx-auto" src={laravel} alt="HTML icon" />
          <p className="my-4">Laravel</p>
        </div>
      </div>
    </div>
  );
}

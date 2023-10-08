import React from "react";
import useMenu from "../../hooks/useMenu";

export default function SobreMi() {
  const { showMenu } = useMenu();
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center h-full justify-center mx-10 gap-x-16">
        <div className="lg:w-1/3 w-full px-4 py-6 lg:px-0 lg:py-0 md:flex md:items-center md:justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvBaWfPA9uQrTvPsdNuTb2J4hbnP7DrJfQMw&usqp=CAU"
            alt=""
            className=""
          />
        </div>
        <div className="lg:w-[70%] text-center lg:text-left">
          <h2 className="text-3xl mb-4">
            Sobre <span className="text-[#13bbff] ">mi</span>
          </h2>
          <p className="leading-8 mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
            voluptates aliquid, quisquam harum neque velit tempora rem molestias
            quo eligendi alias officia pariatur accusantium dignissimos esse
            molestiae laboriosam, cupiditate voluptate.
          </p>
          <h5>Conecta conmigo:</h5>
          <div className="flex gap-4 mt-4 text-lg justify-center lg:justify-start mb-4 md:mb-4 lg:mb-0">
            <span
              className={`${
                showMenu ? "" : "transform hover:scale-110 transition-all"
              }`}
            >
              <a href="" className="">
                <i class="ri-linkedin-line text-[#13bbff] "></i>
              </a>
            </span>
            <span
              className={`${
                showMenu ? "" : "transform hover:scale-110 transition-al"
              }`}
            >
              <a href="">
                <i class="ri-linkedin-box-fill text-[#13bbff] "></i>
              </a>
            </span>
            <span
              className={`${
                showMenu ? "" : "transform hover:scale-110 transition-al"
              }`}
            >
              <a href="">
                <i class="ri-github-fill text-[#13bbff] "></i>
              </a>
            </span>
            <span
              className={`${
                showMenu ? "" : "transform hover:scale-110 transition-al"
              }`}
            >
              <a href="">
                <i class="ri-github-fill text-[#13bbff] "></i>
              </a>
            </span>
            <span
              className={`${
                showMenu ? "" : "transform hover:scale-110 transition-al"
              }`}
            >
              <a href="">
                <i class="ri-github-fill text-[#13bbff] "></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

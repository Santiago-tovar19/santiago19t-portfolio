import React from "react";
import useMenu from "../../hooks/useMenu";

export default function Hero() {
  const { showMenu } = useMenu();
  return (
    <>
      <section
        class="lg:h-screen my-24 lg:my-0 pt-10  flex flex-col lg:flex-row items-center justify-center "
        id="home"
      >
        <div className="w-full px-8 lg:w-[1140px] flex flex-col lg:flex-row items-center justify-between">
          <div class=" ">
            <h4 className="text-2xl text-center lg:text-left">Hi, there!</h4>
            <h1 className="text-3xl lg:text-6xl my-5 text-center lg:text-left">
              Im <span>Santiago Tovar</span>
            </h1>
            <p className="text-base  font-normal text-center lg:text-left md:mx-14 lg:mx-0 lg:w-[620px] text-[#c3cad5] leading-[30px] mb-4  ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
              culpa soluta necessitatibus perferendis amet libero odio eveniet
              vel excepturi odit.
            </p>
            <div class="mb-10  text-center lg:text-left">
              <a href="#">
                <i
                  class={`
                ri-facebook-circle-line inline-flex items-center justify-center w-10 h-10 text-[#13bbff] rounded-xl text-xl mr-4 cursor-pointer shadow-xl transition-all
                ${
                  showMenu
                    ? ""
                    : "backdrop-brightness-88 transform hover:scale-110"
                }
                hover:scale-110 -z-50`}
                ></i>
              </a>
              <a href="">
                <i
                  class={`
                ri-github-line inline-flex items-center justify-center w-10 h-10 text-[#13bbff] rounded-xl text-xl mr-4 cursor-pointer shadow-xl transition-all ${
                  showMenu
                    ? ""
                    : "backdrop-brightness-88 transform hover:scale-110"
                }
                `}
                ></i>
              </a>
              <a href="">
                <i
                  class={`
                ri-linkedin-line inline-flex items-center justify-center w-10 h-10 text-[#13bbff] rounded-xl text-xl mr-4 cursor-pointer shadow-xl transition-all 
                ${
                  showMenu
                    ? ""
                    : "backdrop-brightness-88 transform hover:scale-110"
                }
                `}
                ></i>
              </a>
            </div>
            <div class="main-btn text-center lg:text-left mb-10 lg:mb-0">
              <a
                href="#"
                class="inline-block px-4 py-2 bg-[#13bbff] text-[#1b1f24] border-2 border-[#13bbff] rounded-lg font-semibold text-[15px] transition-all duration-500 ease-in-out hover:bg-transparent hover:text-[#13bbff] "
              >
                Hire me
              </a>
              <a
                href="#"
                class="inline-block px-4 py-2 hover:bg-[#13bbff] hover:text-[#1b1f24] border-2 border-[#13bbff] rounded-lg font-semibold text-[15px] transition-all duration-500 ease-in-out bg-transparent  text-[#13bbff] ml-4"
              >
                Download VC
              </a>
            </div>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvBaWfPA9uQrTvPsdNuTb2J4hbnP7DrJfQMw&usqp=CAU"
              alt=""
              className=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

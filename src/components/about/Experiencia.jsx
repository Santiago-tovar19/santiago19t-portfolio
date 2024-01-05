import React from "react";

export default function Experiencia() {
  return (
    <section className="flex flex-col lg:flex-row items-center h-full justify-center mx-10 gap-x-16 gap-y-10 md:gap-y-0">
      <div className="bg-[#22282f] px-8 py-6 rounded-md">
        <div className="flex gap-y-4 flex-col ">
          <h4 className="border-l border-solid border-[#13bbff] w-full pl-3">
            2022 - Actualidad
          </h4>
          <h5 className="text-[#13bbff] text-xl">Full Stack Developer</h5>
          <p className="leading- leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odio
            eligendi dignissimos inventore pariatur, sit repellat non quidem nam
            et consequatur iste, possimus voluptatem magnam praesentium quasi
            ducimus! Labore, libero!
          </p>
        </div>
      </div>
      <div className="bg-[#22282f] px-8 py-6 rounded-md">
        <div className="flex gap-y-4 flex-col ">
          <h4 className="border-l border-solid border-[#13bbff] w-full pl-3">
            2023 - Actualidad
          </h4>
          <h5 className="text-[#13bbff] text-xl">Full Stack Developer</h5>
          <p className="leading- leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odio
            eligendi dignissimos inventore pariatur, sit repellat non quidem nam
            et consequatur iste, possimus voluptatem magnam praesentium quasi
            ducimus! Labore, libero!
          </p>
        </div>
      </div>
    </section>
  );
}

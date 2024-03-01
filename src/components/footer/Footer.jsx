import React from "react";
import useMenu from "../../hooks/useMenu";

export default function Footer() {
  return (
    <div class="footer flex items-center justify-center gap-8 py-4 bg-[#22282f] ">
      <div class="copyright">
        <p>
          Build with <span className="text-[#13bbff] ">ReactJs</span> and{" "}
          <span className="text-[#13bbff] ">Tailwind</span> by Santiago Tovar
        </p>
      </div>
    </div>
  );
}

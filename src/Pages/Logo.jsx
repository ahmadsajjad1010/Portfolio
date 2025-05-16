import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function Logo() {
  useGSAP(function () {
    gsap.to(".container", {
      rotate: 360,
      duration: 8,
      repeat: -1,
      ease: "linear",
    });
  });
  return (
    <div>
      <div className="rotating1con  w-20 gap-6 flex flex-col absolute right-[60px] bottom-5">
        <div className="mw-20  rotating1 container  mh-20 bg-center bg-cover bg-no-repeat ">
          <img src="./assets/rotatingicon1.webp" alt="" />
        </div>

        <div className="w-20   rotating1  container  h-20 bg-center bg-cover bg-no-repeat ">
          <img src="./assets/rotatingicon2.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Logo;

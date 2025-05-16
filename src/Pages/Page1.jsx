import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import MovingText from "./MovingText";
import Logo from "./Logo";

function Page1() {
  const [xval, setxval] = useState(0);
  const [yval, setyval] = useState(0);
  const content = useRef(null);

  // Function to handle mouse movement
  const contentMove = (e) => {
    if (window.innerWidth <= 768) {
      // Reset rotation on small screens
      gsap.to(content.current, {
        transform: "rotateX(0deg) rotateY(0deg)",
        duration: 0.5,
      });
      return;
    }

    // Calculate rotation based on mouse position
    const x =
      (e.clientX -
        content.current.getBoundingClientRect().x -
        content.current.getBoundingClientRect().width / 2) /
      15;

    const y =
      -(
        e.clientY -
        content.current.getBoundingClientRect().y -
        content.current.getBoundingClientRect().height / 2
      ) / 10;

    setxval(x);
    setyval(y);
  };

  // Effect to apply GSAP animation on values update
  useEffect(() => {
    if (window.innerWidth > 768) {
      gsap.to(content.current, {
        transform: `rotateX(${yval}deg) rotateY(${xval}deg)`,
        duration: 1,
        ease: "elastic.out(1,0.3)",
      });
    } else {
      // Reset transform for small screens
      gsap.to(content.current, {
        transform: "rotateX(0deg) rotateY(0deg)",
        duration: 0.5,
      });
    }
  }, [xval, yval]);

  return (
    <div
      onMouseMove={(e) => {
        contentMove(e);
      }}
      className="relative h-screen px-6 py-2 bg-[#0D0D0D]"
    >
      <div
        className="w-full shadow-2xl main relative h-full bg-no-repeat rounded-3xl bg-cover bg-center"
        style={{
          backgroundImage: `url('./assets/mainsidepose.jpg')`,
        }}
      >
        <div className="outer relative w-2/3 px-[4.5rem] h-full flex flex-col justify-around">
          <div className="">
            <div>
              <div
                className="w-16 h-16 bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url('./assets/logo.webp')`,
                }}
              ></div>
            </div>
          </div>
          <div ref={content} className="movingcontent">
            <MovingText abc={content} />
          </div>
          <div className="flex flex-col">
            <p className="text-white font-[font1] text-xl">
              BRAND DEVELOPER | WEBSITE DEVELOPER
            </p>
            <p className="text-gray-400">AHMAD SAJJAD</p>
          </div>
        </div>

        <div>
          <Logo />
        </div>
      </div>
    </div>
  );
}

export default Page1;

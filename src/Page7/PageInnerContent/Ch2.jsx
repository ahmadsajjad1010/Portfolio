import React, { useEffect } from "react";
import { motion } from "framer-motion";
import MyProfile from "./MyProfile";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Ch2() {
  useEffect(() => {
    ScrollTrigger.matchMedia({
      // Desktop view
      "(min-width: 768px)": function () {
        gsap.fromTo(
          ".spantext",
          { opacity: 0, y: -50, rotate: -45 },
          {
            opacity: 1,
            y: 0,
            rotate: -10,
            duration: 2,
            scrollTrigger: {
              trigger: ".spantext",
              start: "top 60%",
              end: "top 20%",
              scrub: true,
            },
          }
        );
      },

      // Mobile and tablet view
      "(max-width: 767px)": function () {
        gsap.fromTo(
          ".spantext",
          { opacity: 0, y: -30, rotate: -30 },
          {
            opacity: 1,
            y: 0,
            rotate: -10,
            duration: 2,
            scrollTrigger: {
              trigger: ".spantext",
              start: "top 85%",
              end: "top 40%",
              scrub: true,
            },
          }
        );
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="ch2 py-6 relative w-full">
      {/* Glowing Circles */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 7,
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{ boxShadow: "rgb(0, 255, 22) 0px 10px 50px 104px" }}
        className="absolute top-[18rem] right-8 sm:right-24 w-[50vw] sm:w-[35%] h-[20vh] sm:h-[30%] bg-[#D0F034] rounded-full"
      ></motion.div>

      <motion.div
        initial={{ scale: 1, rotate: 0 }}
        animate={{ scale: [1, 1.4, 1], rotate: 45 }}
        transition={{
          duration: 7,
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{ boxShadow: "rgb(0, 255, 22) 0px 10px 50px 104px" }}
        className="absolute top-[23rem] right-[4rem] sm:right-[13rem] w-[35vw] sm:w-[23%] h-[15vh] sm:h-[15%] bg-[#07FE1C] rounded-full"
      ></motion.div>

      {/* Lines Section */}
      <div className="lines relative w-full">
        <div className="linesinner border-[#A3A3A3] py-8 sm:py-16 border-b-[1px] flex items-center justify-start px-4 sm:pl-9 h-[20vh]">
          <h1 className="linestext text-[6vw] sm:text-[4vw] text-black tracking-wide font-[font4]">
            I'm a{" "}
            <span className="bg-[#07FE1C] spantext px-2 sm:px-3 rounded-full text-[4vw] sm:text-[2.5vw] inline-block transform -rotate-[20deg]">
              Frontend
            </span>{" "}
            Web Developer Crafting
          </h1>
        </div>

        <div className="linesinner border-[#A3A3A3] py-8 sm:py-16 border-b-[1px] flex items-center justify-start px-4 sm:pl-9 h-[20vh]">
          <h1 className="linestext text-[6vw] sm:text-[4vw] text-black tracking-wide font-[font4]">
            User-friendly web experiences with a
          </h1>
        </div>

        <div className="linesinner border-[#A3A3A3] py-8 sm:py-16 border-b-[1px] flex items-center justify-start px-4 sm:pl-9 h-[20vh]">
          <h1 className="linestext text-[6vw] sm:text-[4vw] text-black tracking-wide font-[font4]">
            Focus On design and functionality
          </h1>
        </div>
      </div>

      {/* Profile Section */}
      <div className="profilesection mt-7 px-4 relative sm:px-6 w-full">
        <MyProfile />
      </div>
    </div>
  );
}

export default Ch2;

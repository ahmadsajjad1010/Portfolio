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
    <div className="ch2 py-6 relative w-full bg-[#0a0a0a] overflow-hidden">
      {/* Dark background with subtle grid pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Your original glowing circles (enhanced) */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 7,
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute top-[18rem] right-8 sm:right-24 w-[50vw] sm:w-[35%] h-[20vh] sm:h-[30%] bg-emerald-500/20 rounded-full blur-[80px]"
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
        className="absolute top-[23rem] right-[4rem] sm:right-[13rem] w-[35vw] sm:w-[23%] h-[15vh] sm:h-[15%] bg-emerald-400/20 rounded-full blur-[80px]"
      ></motion.div>

      {/* Lines Section */}
      <div className="lines relative w-full border-t border-b border-gray-800">
        <div className="linesinner border-gray-800 py-8 sm:py-16 border-t-[1px] border-b-[1px] flex items-center justify-start px-4 sm:pl-9 h-[20vh]">
          <h1 className="linestext text-[6vw] sm:text-[4vw] text-gray-300 tracking-wide font-[font4]">
            I'm a{" "}
            <span className="bg-emerald-500 spantext px-2 sm:px-3 rounded-full text-[4vw] sm:text-[2.5vw] inline-block transform -rotate-[20deg] text-gray-900 font-bold">
              Frontend
            </span>{" "}
            Web Developer Crafting
          </h1>
        </div>

        <div className="linesinner border-gray-800 py-8 sm:py-16 border-b-[1px] flex items-center justify-start px-4 sm:pl-9 h-[20vh]">
          <h1 className="linestext text-[6vw] sm:text-[4vw] text-gray-300 tracking-wide font-[font4]">
            User-friendly web experiences with a
          </h1>
        </div>

        <div className="linesinner border-gray-800 py-8 sm:py-16 border-b-[1px] flex items-center justify-start px-4 sm:pl-9 h-[20vh]">
          <h1 className="linestext text-[6vw] sm:text-[4vw] text-gray-300 tracking-wide font-[font4]">
            Focus On design and functionality
          </h1>
        </div>
      </div>

      {/* Profile Section */}
      <div className="profilesection mt-7 relative px-9 w-full">
        <MyProfile />
      </div>
    </div>
  );
}

export default Ch2;
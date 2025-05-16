import React, { useRef, useState } from "react";
import gsap from "gsap";
import Footer from "./Footer";
import { motion } from "motion/react";
function Page2() {
  const [value, setvalue] = useState("M 20 80 Q 300 80 580 80");
  const str = useRef(null);
  function string(l) {
    // Get the bounding rect of the SVG container
    const rect = str.current.getBoundingClientRect();
    // Calculate the mouse position relative to the viewport
    const mouseX = l.clientX - rect.left; // Consider scrollX for horizontal scrolling
    const mouseY = l.clientY - rect.top; // Consider scrollY for vertical scrolling
    // Update the path with the new position
    setvalue(`M 20 80 Q ${mouseX} ${mouseY} 580 80`);
    console.log(`M 20 80 Q ${mouseX} ${mouseY} 580 80`);
  }
  function Mouseleave() {
    // Reset the path back to initial position when mouse leaves the container
    setvalue("M 20 80 Q 300 80 580 80");
    gsap.to(".svag #line", {
      duration: 0.6, // Duration of the animation
      ease: "elastic.out(1, 0.3)", // Ease effect for smooth transition
      attr: { d: "M 20 80 Q 300 80 580 80" }, // Reset the 'd' attribute to the initial value
    });
  }
  return (
    <>
      <div className="w-full relative con ">
        {/* Header */}
        <div className="header stringuppercon pt-[2vw] h-10 w-full">
          <h1 className="text-gray-400 text-[20px] w-max mx-auto">
            © ahmad.studio 2024 | designed and developed
          </h1>
        </div>

        {/* Moving Text */}
        {/* data-scroll data-scroll-speed='.4' data-scroll-section */}
        {/* <div className="footer absolute top-10  rounded-xl overflow-hidden w-full "> */}
        <div className="imp   mt-10 movingcont2 pb-[33px] items-center  justify-center h-[50vh] whitespace-nowrap border-y-[1px] border-[#A3A3A3] flex">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }} // Animate horizontally to the left
            transition={{
              duration: 7,
              ease: "linear",
              repeat: Infinity, // Infinite loop for scrolling
            }}
            className="font-[font3] pr-12  movingcont2 text-white   text-[23rem] w-fit"
          >
          PIXELS POWERED BY LOGIC
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 7,
              ease: "linear",
              repeat: Infinity,
            }}
            className="font-[font3] text-white   movingcont2 b whitespace-nowrap   pr-12 text-[23rem] w-fit"
          >
            PIXELS POWERED BY LOGIC
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 7,
              ease: "linear",
              repeat: Infinity,
            }}
            className="font-[font3] text-white  movingcont2 pr-12 whitespace-nowrap text-[23rem] w-fit"
          >
         PIXELS POWERED BY LOGIC

          </motion.h1>
        </div>
        {/* </div> */}

        {/* Footer */}
        <Footer />
      </div>
      <div
        ref={str}
        onMouseLeave={Mouseleave}
        onMouseMove={(l) => {
          string(l);
        }}
        className="line  flex items-center justify-center   z-10 h-fit w-fit  mx-auto"
      >
        <svg
          className="svag"
          width="600"
          height="160"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path id="line" d={value} stroke="#A3A3A3" fill="transparent" />
        </svg>
      </div>
    </>
  );
}

export default Page2;

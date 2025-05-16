import React, { useRef, useEffect } from "react";
import Page1 from "./Pages/Page1";
import './index.css';
import Hire from "./Pages/Hire";
import Page2 from "./Page2/Page2";
import Page3 from "./Page3/Page3";
import Page4 from "./Page4/Page4";
import Page5 from "./Page5/Page5";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import Page7 from "./Page7/Page7";


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  // moving mouse
  function cursor(e) {
    const element = document.querySelector("#dot");
    // Use GSAP for smooth transition of the dot following the cursor
    gsap.to(element, {
      x: e.pageX, // -15px to center the dot on the cursor
      y: e.pageY, // Same for vertical alignment
      duration: 0.5, // Short duration for a quick, smooth move
      ease: "power1.out", // Easing for smooth animation
    });
  }
  return (
    <>
      <div
        onMouseMove={(e) => {
          cursor(e);
        }}
        className="dalla z-[99999] bg-[#0D0D0D] text-[#A3A3A3]"
      >
        <div
          style={{ boxShadow: "0 0 12px 6px rgb(208 240 52)" }}
          id="dot"
          className="w-[10px]  mix-blend-plus-lighter bg-[#D0F034] origin-center z-[999] absolute h-[10px]  rounded-full"
        ></div>
        <Hire />
        {/* main upper part  */}
        <Page1 />
        {/* text moving and string wala part  */}
        <Page2 />
        {/* coumputer wala part  */}
        <Page3 />
        {/* balling effect game */}
        <Page4 />
        {/* my tools that i use  */}
        <Page5 />
        {/* last animated part  */}
        <Page7 />
      </div>
    </>
  );
}

export default App;

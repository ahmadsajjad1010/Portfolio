import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import Page1 from "./Pages/Page1";
import "./index.css";
import Hire from "./Pages/Hire";
import Page2 from "./Page2/Page2";
import Page3 from "./Page3/Page3";
import Page4 from "./Page4/Page4";
import Page5 from "./Page5/Page5";
import Page7 from "./Page7/Page7";
import Page8 from "./Page8/Page8";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const containerRef = useRef(null);

  // Cursor follows mouse with smooth GSAP animation
  function cursor(e) {
    const element = document.querySelector("#dot");
    gsap.to(element, {
      x: e.pageX,
      y: e.pageY,
      duration: 0.1,
      ease: "power1.out",
    });
  }

  useEffect(() => {
    let smoother;

    if (containerRef.current) {
      smoother = ScrollSmoother.create({
        wrapper: containerRef.current,
        content: containerRef.current.children[0],
        smooth: 0,
        effects: true,
        normalizeScroll: true,
      });
    }

    return () => {
      if (smoother) smoother.kill();
    };
  }, []);

  return (
    <>
      <div
        onMouseMove={cursor}
        ref={containerRef}
        className="dalla z-[99999] bg-[#0D0D0D] text-[#A3A3A3]"
        style={{
          height: "100vh",
          overflowY: "auto",      // Important: allow vertical scroll, not hidden
          overflowX: "hidden",
          position: "relative",   // Ensure positioning context for children
        }}
      >
        {/* Scroll content container */}
        <div
          className="scroll-content"
          style={{ willChange: "transform", position: "relative" }} // Fix stacking context
        >
          {/* Custom cursor dot */}
          <div
            id="dot"
            style={{ boxShadow: "0 0 12px 6px rgb(208 240 52)" }}
            className="w-[10px] h-[10px] rounded-full bg-[#D0F034] mix-blend-plus-lighter origin-center z-[9999] absolute pointer-events-none"
          ></div>

          {/* Your pages/components */}
             {/* Your website sections/components */}
          <Hire />
        {/* main upper part  */}
        <Page1 />
        {/* text moving and string wala part  */}
        <Page2 />
        {/* coumputer wala part  */}
        <Page3 />
        <Page5 />
        {/* balling effect game */}
        <Page8 />
          {/* new scroll marquee part */}
        <Page4 />
        {/* my tools that i use  */}
        {/* last animated part  */}
    
        <Page7 />
      
        </div>
      </div>
    </>
  );
}

export default App;

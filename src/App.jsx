import React, { useEffect } from "react";
import gsap from "gsap";

// Page imports
import Page1 from "./Pages/Page1";
import "./index.css";
import Hire from "./Pages/Hire";
import Page2 from "./Page2/Page2";
import Page3 from "./Page3/Page3";
import Page4 from "./Page4/Page4";
import Page5 from "./Page5/Page5";
import Page7 from "./Page7/Page7";
import Page8 from "./Page8/Page8";

function App() {
  // Cursor follows mouse
  function cursor(e) {
    const element = document.querySelector("#dot");
    gsap.to(element, {
      x: e.pageX,
      y: e.pageY,
      duration: 0.1,
      ease: "power1.out",
    });
  }

  return (
    <>
      <div
        onMouseMove={cursor}
        className="dalla z-[99999] bg-[#0D0D0D] text-[#A3A3A3]"
        style={{
          height: "100%",
          overflowX: "hidden",
          position: "relative",
        }}
      >
        {/* Custom cursor dot */}
        <div
          id="dot"
          style={{ boxShadow: "0 0 12px 6px rgb(208 240 52)" }}
          className="w-[10px] h-[10px] rounded-full bg-[#D0F034] mix-blend-plus-lighter origin-center z-[9999] absolute pointer-events-none"
        ></div>

        {/* Website sections */}
        <Hire />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page5 />
        <Page8 />
        <Page4 />
        <Page7 />
      </div>
    </>
  );
}

export default App;

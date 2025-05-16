import React, { useRef, useState, useEffect } from "react";
import { GoPlus } from "react-icons/go";

function Page5() {
  const Picbox = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  // Detect screen size and update isMobile
  useEffect(() => {
    function checkScreen() {
      setIsMobile(window.innerWidth <= 768);
      // Hide Picbox on screen size change
      if (Picbox.current) {
        Picbox.current.style.display = "none";
      }
      setIsVisible(false);
      setCurrentImage("");
    }
    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Toggle image visibility on mobile click
  function togglePicbox(e) {
    if (!isMobile) return; // Only for mobile

    const imageUrl = e.currentTarget.getAttribute("data-pic");

    if (isVisible && currentImage === imageUrl) {
      // Hide if clicking same image again
      setIsVisible(false);
      setCurrentImage("");
      Picbox.current.style.display = "none";
    } else {
      // Show new image
      setIsVisible(true);
      setCurrentImage(imageUrl);
      Picbox.current.style.backgroundImage = `url(${imageUrl})`;
      Picbox.current.style.display = "block";
    }
  }

  // For desktop hover: show image on mouse enter
  function handleMouseEnter(pic) {
    if (!isMobile && Picbox.current) {
      Picbox.current.style.backgroundImage = `url(${pic})`;
      Picbox.current.style.display = "block";
    }
  }

  // For desktop hover: hide image on mouse leave
  function handleMouseLeave() {
    if (!isMobile && Picbox.current) {
      Picbox.current.style.display = "none";
    }
  }

  // Skills data
  const skills = [
    { name: "HTML", pic: "./assets/htmlslide1.jpg" },
    { name: "CSS", pic: "./assets/cssslide2.jpg" },
    { name: "JAVASCRIPT", pic: "./assets/slide3.jpg" },
    { name: "TAILWIND CSS", pic: "./assets/tailwindcssslide4.jpg" },
    { name: "REACT", pic: "./assets/reactslide5.jpg" },
    { name: "GSAP", pic: "./assets/gsapslide6.jpg" },
    { name: "Node.js", pic: "./assets/gsapslide7.webp" },
    { name: "Express Js", pic: "./assets/gsapslide8.png" },
    { name: "Mongodb", pic: "./assets/gsapslide9.png" },
  ];

  return (
    <div className="main w-full z-[9999] relative">
      <div className="header flex items-center z-[9999] gap-2 pl-[81px] justify-start">
        <div className="dot w-2 h-2 rounded-full bg-[#D0F034]"></div>
        <p className="font-[font4] text-xl text-white">Essential tools that I use</p>
      </div>

      <div className="w-full flex justify-center items-center relative">
        {/* Picbox */}
        <div
          ref={Picbox}
          className="picbox w-[28vw] h-[34vh] fixed z-40 top-[30%] rounded-xl right-[25%]"
          style={{
            display: "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="count overflow-hidden relative w-full h-[90%]">
          {skills.map(({ name, pic }, index) => (
            <div
              key={index}
              data-pic={pic}
              onClick={togglePicbox}
              onMouseEnter={() => handleMouseEnter(pic)}
              onMouseLeave={handleMouseLeave}
              className="skillscont inner-con z-30 w-full overflow-hidden relative h-24 border-b-[1px] border-[#A3A3A3] flex px-20 justify-between items-center cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter" && isMobile) togglePicbox(e);
              }}
            >
              <h1 className="font-[font4] skillsportion relative text-[3vw] text-white">{name}</h1>
              <div className="cross text-6xl">
                <GoPlus />
              </div>
            </div>
          ))}

          {/* Shade circle */}
          <div
            style={{ boxShadow: "rgb(208, 240, 52) 0px -38px 250px 300px" }}
            className="shade z-1 bg-[#D0F034] rounded-full right-[35%] bottom-[-850px] absolute w-[30rem] h-[30rem]"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Page5;

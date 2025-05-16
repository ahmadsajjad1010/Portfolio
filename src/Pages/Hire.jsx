import React from "react";

function Hire() {
  return (
    <div className="hiremecon fixed z-[999] right-[60px] top-16">
      <div>
        <div className="hireme w-[130px] shadow-xl flex h-[54px] text-center text-white rounded-full bg-[#00ff16]">
          <a
            href="./assets/Ahmed-Sajjad-CV.pdf" // This path is relative to the 'public' folder
            download="./assets/Ahmed-Sajjad-CV.pdf" // Optional: specify the download filename
            className="hiremeinner w-[120px] font-[font1] m-auto h-[2.8rem] flex justify-center items-center text-white rounded-full bg-black cursor-pointer hover:bg-gray-800 transition-all duration-200"
          >
            Download CV!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hire;

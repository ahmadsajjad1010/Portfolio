import React from "react";

function Page3() {
  return (
    <div className="w-full relative">
      <div className="vid  p-[10vh] relative z-10 flex justify-center items-center">
        <video
          autoPlay
          loop
          muted
          className="z-10 w-[50vw] border-none "
          src="./assets/computervideo.mp4"
        ></video>
        <img
          className="w-[63vw] absolute  h-[31vw] z-20"
          src="./assets/laptop.webp"
          alt=""
        />

        <div className="line-head absolute w-full h-1/2 flex flex-col justify-evenly items-center">
          <div className="line1 absolute top-[20%] mx-auto z-0 w-[75%] h-[2px] bg-gray-500"></div>
          <div className="line2 absolute  top-[56   %] z-0 w-[90%] h-[2px] bg-gray-500"></div>
          <div className="line3 absolute  top-[90%]  z-0 w-[100%] h-[2px] bg-gray-500"></div>
        </div>
      </div>
    </div>
  );
}

export default Page3;

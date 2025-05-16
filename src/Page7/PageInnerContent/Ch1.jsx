import { motion } from "motion/react";
import React from "react";

function Ch1() {
  return (
    <div className="w-screen flex justify-center relative z-[0] items-center px-8 py-12 bg-white">
      {/* orange motion */}
      <motion.div 
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{ boxShadow: "rgb(0, 255, 22) 0px 10px 50px 104px" }}
        className="
          orange overflow-hidden right-20 absolute 
          w-[3vw] h-[2vh] 
          sm:w-[2%] sm:h-[-50%]
          xs:w-[2%] xs:h-[%]
          bg-[#07FE1C] rounded-full
        "
      ></motion.div>
      <motion.div
        initial={{ scale: 1, rotate: 0 }}
        animate={{
          scale: [1, 1.4, 1],
          rotate: 45,
        }}
        transition={{
          duration: 7,
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{ boxShadow: "rgb(0, 255, 22) 0px 10px 50px 104px" }}
        className="
          orange overflow-hidden right-[11rem] absolute 
          w-[1vw] h-[2vh] 
         sm:w-[2%] sm:h-[-50%]
          xs:w-[2%] xs:h-[-40%]
          transform rotate-90 bg-[#07FE1C] rounded-full
        "
      ></motion.div>

      <div
        style={{
          backdropFilter: "blur(5px) saturate(180%)",
          WebkitBackdropFilter: "blur(5px) saturate(180%)",
          backgroundColor: "rgba(255, 255, 255, 0.47)",
          borderRadius: "12px",
          border: "1px solid rgba(209, 213, 219, 0.3)",
        }}
        className="innbox z-10 w-full overflow-hidden shadow-2xl flex justify-center items-center relative rounded-3xl"
      >
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-contain"
          src="./assets/girlvideo.mp4"
        ></video>
      </div>
    </div>
  );
}

export default Ch1;

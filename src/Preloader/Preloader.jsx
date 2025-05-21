// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Preloader = ({ setLoading }) => {
//   const preloaderRef = useRef(null);
//   const logoRef = useRef(null);
//   const textRef = useRef(null);
//   const dotRef = useRef(null);

//   useEffect(() => {
//     // Spinner continuous rotation + oscillation scale & rotate
//     gsap.to(logoRef.current, {
//       rotation: 360,
//       duration: 3,
//       ease: "linear",
//       repeat: -1,
//     });
//     gsap.to(logoRef.current, {
//       scale: 1.1,
//       rotation: 15,
//       duration: 1.5,
//       yoyo: true,
//       repeat: -1,
//       ease: "power1.inOut",
//     });

//     // Neon text fade-in + subtle pulse glow
//     gsap.fromTo(
//       textRef.current,
//       { opacity: 0, scale: 0.95, filter: "drop-shadow(0 0 0 #D0F034)" },
//       {
//         opacity: 1,
//         scale: 1,
//         filter: "drop-shadow(0 0 8px #D0F034)",
//         duration: 2,
//         ease: "power2.out",
//         yoyo: true,
//         repeat: -1,
//         repeatDelay: 1,
//       }
//     );

//     // Small bouncing dot animation below text
//     gsap.to(dotRef.current, {
//       y: -10,
//       duration: 0.8,
//       yoyo: true,
//       repeat: -1,
//       ease: "power1.inOut",
//     });

//     // Background subtle gradient shift (infinite)
//     gsap.to(preloaderRef.current, {
//       background:
//         "linear-gradient(270deg, #0D0D0D, #121212, #0D0D0D, #121212)",
//       backgroundSize: "800% 800%",
//       duration: 15,
//       ease: "linear",
//       repeat: -1,
//       yoyo: true,
//     });

//     // Fade out preloader after 2 seconds
//     const timer = setTimeout(() => {
//       gsap.to(preloaderRef.current, {
//         opacity: 0,
//         duration: 1,
//         onComplete: () => setLoading(false),
//       });
//     }, 2200);

//     return () => clearTimeout(timer);
//   }, [setLoading]);

//   return (
//     <div
//       ref={preloaderRef}
//       className="fixed inset-0 z-[999999] flex flex-col items-center justify-center"
//       style={{
//         background:
//           "linear-gradient(270deg, #0D0D0D, #121212, #0D0D0D, #121212)",
//         backgroundSize: "400% 400%",
//       }}
//     >
//       {/* Rotating glowing circle */}
//       <div
//         ref={logoRef}
//         className="w-24 h-24 rounded-full border-4 border-[#D0F034] border-t-transparent"
//         style={{
//           boxShadow:
//             "0 0 20px 6px rgba(208, 240, 52, 0.9), inset 0 0 12px 5px #D0F034",
//         }}
//       ></div>

//       {/* Neon glowing brand text */}
//       <h1
//         ref={textRef}
//         className="mt-8 text-4xl font-extrabold text-[#D0F034] tracking-wide select-none"
//         style={{ textShadow: "0 0 12px #D0F034, 0 0 24px #B7DD44" }}
//       >
//         Ahmed.dev
//       </h1>

//       {/* Bouncing neon dot */}
//       <div
//         ref={dotRef}
//         className="mt-3 w-5 h-5 rounded-full bg-[#D0F034]"
//         style={{
//           boxShadow: "0 0 10px 4px #B7DD44",
//         }}
//       ></div>
//     </div>
//   );
// };

// export default Preloader;

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ScrollMarquee = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const lastScroll = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollDown = currentScroll > lastScroll.current;
      const direction = scrollDown ? 1 : -1;

      gsap.to(line1Ref.current, {
        x: `+=${30 * direction}`, // smaller increments for smoothness
        ease: "power2.out",
        duration: 0.3,
      });

      gsap.to(line2Ref.current, {
        x: `-=${30 * direction}`,
        ease: "power2.out",
        duration: 0.3,
      });

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="h-[40vh] md:h-[80vh] bg-[#131313] border-gray-500 border-t-[1px] text-white overflow-hidden flex flex-col justify-center items-center gap-8 px-4"
    >
      {/* Transparent stroked text */}
      <div
        ref={line1Ref}
        className="text-[12vw] md:text-[13vw] whitespace-nowrap font-anton text-transparent stroke-white"
        style={{ WebkitTextStrokeWidth: "1.5px" }}
      >
        {Array(20).fill("WELCOME TO MY PORTFOLIO  ✦ ").join(" ")}
      </div>

      {/* Solid white filled text */}
      <div
        ref={line2Ref}
        className="text-[12vw] md:text-[13vw] whitespace-nowrap font-anton text-white"
      >
        {Array(20).fill("✦ ENJOY THE SMOOTH SCROLL  ✦ ").join(" ")}
      </div>
    </div>
  );
};

export default ScrollMarquee;

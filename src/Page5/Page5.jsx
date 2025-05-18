import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page5 = () => {
  const containerRef = useRef(null);

  const skillItems = [
    {
      name: "HTML5",
      icon: "🔗",
      level: 95,
      color: "#E44D26",
      category: "Frontend",
      desc: "Expert in semantic and accessible HTML.",
    },
    {
      name: "CSS3",
      icon: "🎨",
      level: 90,
      color: "#264DE4",
      category: "Frontend",
      desc: "Strong skills in responsive design & animations.",
    },
    {
      name: "JavaScript",
      icon: "⚡",
      level: 85,
      color: "#F0DB4F",
      category: "Frontend",
      desc: "Modern ES6+ syntax and advanced JS concepts.",
    },
    {
      name: "React",
      icon: "⚛️",
      level: 80,
      color: "#61DAFB",
      category: "Frontend",
      desc: "Building reusable components & hooks.",
    },
    {
      name: "GSAP",
      icon: "🎬",
      level: 75,
      color: "#88CE02",
      category: "Frontend",
      desc: "Smooth, performant animations & scroll triggers.",
    },
    {
      name: "Node.js",
      icon: "🟢",
      level: 70,
      color: "#68A063",
      category: "Backend",
      desc: "Event-driven backend development.",
    },
    {
      name: "MongoDB",
      icon: "🍃",
      level: 65,
      color: "#4DB33D",
      category: "Backend",
      desc: "NoSQL database modeling and queries.",
    },
    {
      name: "Express",
      icon: "🚀",
      level: 70,
      color: "#000000",
      category: "Backend",
      desc: "Lightweight backend framework expertise.",
    },
    {
      name: "Tailwind",
      icon: "🌀",
      level: 85,
      color: "#38B2AC",
      category: "Frontend",
      desc: "Utility-first CSS framework mastery.",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".skill-item").forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
        });

        const levelBar = item.querySelector(".skill-level-bar");
        const circleProgress = item.querySelector(".progress-circle > circle:last-child");

        item.addEventListener("mouseenter", () => {
          // Animate linear bar fill
          gsap.to(levelBar, {
            width: "100%",
            duration: 0.5,
            ease: "power2.out",
          });
          // Animate circle progress stroke offset to zero
          gsap.to(circleProgress, {
            strokeDashoffset: 0,
            duration: 0.7,
            ease: "power2.out",
          });
          // Scale and shadow for card
          gsap.to(item, {
            scale: 1.05,
            duration: 0.3,
            boxShadow: `0 0 20px ${levelBar.style.backgroundColor || "#D0F034"}`,
            ease: "power2.out",
          });
          // Bounce icon
          gsap.fromTo(
            item.querySelector(".skill-icon"),
            { y: 0 },
            { y: -10, duration: 0.3, yoyo: true, repeat: 1, ease: "power1.inOut" }
          );
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(levelBar, {
            width: "0%",
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(circleProgress, {
            strokeDashoffset: parseFloat(circleProgress.getAttribute("stroke-dasharray")),
            duration: 0.7,
            ease: "power2.out",
          });
          gsap.to(item, {
            scale: 1,
            boxShadow: "none",
            ease: "power2.out",
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // For circle progress bar, calculate stroke dash array and offset:
  const radius = 30;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      ref={containerRef}
      className="relative py-20 overflow-hidden"
      style={{ background: "#0D0D0D", transform: "none", rotate: "0deg" }}
    >
      {/* Fixed Background Rings without random rotation */}
      <div className="skills-bg absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-[#D0F034]/10 rounded-full"
            style={{
              width: `${100 + i * 100}px`,
              height: `${100 + i * 100}px`,
              top: `${(i * 8) % 100}%`,
              left: `${(i * 11) % 100}%`,
              transform: `rotate(${i * 15}deg)`, // consistent rotation
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto px-4 max-w-7xl">
        <div className="flex items-center mb-12 pl-4">
          <div className="w-3 h-3 rounded-full bg-[#D0F034] mr-3"></div>
          <h2 className="text-3xl font-extrabold text-white tracking-wide">
            My Tech Toolkit
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillItems.map((skill, index) => {
            const dashoffset = circumference * (1 - skill.level / 100);
            return (
              <div
                key={index}
                className="skill-item relative p-6 rounded-xl bg-gradient-to-tr from-[#121212] to-[#1A1A1A] border border-[#2A2A2A] cursor-pointer shadow-md transition-all duration-400 hover:from-[#223300] hover:to-[#445500] hover:border-[#D0F034]/70"
                style={{ minHeight: "200px" }}
                aria-label={`${skill.name} skill at ${skill.level} percent proficiency`}
                tabIndex={0}
              >
                {/* Circular progress around icon */}
                <svg
                  className="progress-circle absolute top-6 left-6 w-16 h-16"
                  width="64"
                  height="64"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background circle */}
                  <circle
                    cx="36"
                    cy="36"
                    r={radius}
                    stroke="#333"
                    strokeWidth="6"
                    opacity="0.3"
                  />
                  {/* Progress circle */}
                  <circle
                    className="stroke-current"
                    cx="36"
                    cy="36"
                    r={radius}
                    stroke={skill.color}
                    strokeWidth="6"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashoffset}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.5s ease" }}
                  />
                </svg>

                {/* Icon with bounce animation */}
                <div
                  className="skill-icon text-5xl absolute top-6 left-6 flex items-center justify-center text-white"
                  style={{ marginLeft: "24px", marginTop: "8px" }}
                  aria-hidden="true"
                >
                  {skill.icon}
                </div>

                <h3 className="text-2xl font-semibold text-white mb-1 ml-20">
                  {skill.name}
                </h3>

                <div className="mb-3 ml-20 text-sm text-[#A3A3A3] italic">
                  {skill.desc}
                </div>

                <div className="absolute bottom-8 left-6 right-6">
                  <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                    <div
                      className="skill-level-bar h-full rounded-full"
                      style={{
                        width: "0%",
                        background: skill.color,
                        boxShadow: `0 0 12px ${skill.color}`,
                      }}
                      data-level={skill.level}
                    />
                  </div>
                  <div className="text-right mt-1 text-xs text-[#A3A3A3] font-mono">
                    {skill.level}%
                  </div>
                </div>

                <div
                  className="absolute inset-0 rounded-xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: `inset 0 0 25px ${skill.color}40`,
                    background: `radial-gradient(circle at center, ${skill.color}20 0%, transparent 80%)`,
                  }}
                />

                {/* Category tag */}
                <div
                  className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: skill.color + "33",
                    color: skill.color,
                    backdropFilter: "blur(4px)",
                    userSelect: "none",
                  }}
                >
                  {skill.category}
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative glowing background circles */}
        <div className="absolute top-0 right-0 w-64 h-64 -mr-32 -mt-32 rounded-full bg-[#D0F034]/10 blur-xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 -ml-48 -mb-48 rounded-full bg-[#D0F034]/5 blur-xl pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Page5;

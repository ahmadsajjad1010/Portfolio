import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// ✅ Image via URL style (NO import needed)
const profilePic = new URL("/assets/Mypic.jpg", import.meta.url).href;

// Register GSAP ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ✅ Utility to generate random transform per letter
const randomizeTransform = () => ({
  rotate: Math.random() * 30 - 15,  // -15 to +15 degrees
  x: Math.random() * 10 - 5,        // -5px to +5px
  y: Math.random() * 10 - 5,
  scale: 1 + Math.random() * 0.2,   // 1 to 1.2
});

// ✅ Animated Title Component
const WigglyText = ({ text }) => {
  const [hovered, setHovered] = useState(false);
  const [randomTransforms, setRandomTransforms] = useState([]);

  const handleMouseEnter = () => {
    const transforms = Array.from(text).map(() => randomizeTransform());
    setRandomTransforms(transforms);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <h1
      className="text-3xl md:text-5xl font-bold tracking-wide text-center leading-tight cursor-default flex flex-wrap justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          animate={hovered ? randomTransforms[index] : { rotate: 0, x: 0, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 12 }}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
};

export default function MyProfile() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el.querySelector(".profile-text"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      el.querySelector(".circle-pic"),
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: el,
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative rounded-xl min-h-screen w-full bg-[#111827] text-white py-16 px-6 sm:px-10 overflow-hidden"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Profile Image */}
        <motion.div
          className="circle-pic w-40 h-40 rounded-full bg-cover bg-center border-4 border-white shadow-lg"
          style={{ backgroundImage: `url(${profilePic})` }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "backOut" }}
        />

        {/* Animated Title with your name and tagline */}
        <WigglyText text="Ahmad Sajjad — MERN Stack Developer" />
      </div>

      {/* Description */}
      <div className="mt-6 max-w-3xl mx-auto space-y-6 text-[clamp(1rem,3.5vw,1.15rem)] text-justify profile-text">
        <p>
          👋 My name is <strong className="text-white">Ahmad Sajjad</strong>, a 21-year-old passionate MERN Stack Web Developer with over 1.5 years of hands-on experience. My journey started in 12th grade, and I've been building web experiences ever since.
        </p>
        <p>
          🎓 I’m currently pursuing a BSIT degree. I’ve gained expertise in technologies like HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and frameworks like <span className="text-indigo-400 font-semibold">React, Tailwind CSS, GSAP, Locomotive Scroll, and Framer Motion</span>.
        </p>
        <p>
          🚀 One of my proudest achievements is this animated portfolio website — a reflection of my creative frontend skills. I aim to deliver user-friendly, visually stunning interfaces. Currently, I'm working on an Uber/Indrive-like web application.
        </p>
        <p>
          🔍 What makes me different is my problem-solving mindset and consistency. I break down complex problems, explore solutions, and don’t stop until it’s solved.
        </p>
        <p>
          🧑‍💻 I'm a fresher but ready to join the industry, contribute to meaningful projects, and grow as a developer.
        </p>
      </div>
    </section>
  );
}

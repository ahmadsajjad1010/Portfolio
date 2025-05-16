import { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    name: "Ali Hamza",
    logo: "./assets/CardCarousel3.jpg",
    review:
      "I’m absolutely impressed with the quality and professionalism. The service exceeded my expectations and the team was super responsive. Highly recommend!",
    createdAt: "2025-05-01",
  },
  {
    id: 2,
    name: "Shariq Moeed",
    logo: "./assets/CardCarousel1.jpg",
    review:
      "Fast, reliable, and exactly what I needed. The experience was seamless from start to finish. I will definitely be coming back.",
    createdAt: "2025-05-03",
  },
  {
    id: 3,
    name: "Khubain Saleem",
    logo: "./assets/CardCarousel2.jpg",
    review:
      "Great attention to detail and fantastic communication throughout the project. The final outcome was perfect and delivered on time.",
    createdAt: "2025-05-05",
  },
  {
    id: 4,
    name: "Sam",
    logo: "./assets/CardCarousel4.jpg",
    review:
      "The best experience I’ve had in a long time. Very professional, friendly, and dedicated. Truly goes above and beyond",
    createdAt: "2025-05-08",
  },
  {
    id: 5,
    name: "Ahmad Sajjad",
    logo: "./assets/t.jpg",
    review:
      "Quality work with a personal touch. The team listened carefully and delivered exactly what I wanted. I’m very happy with the result!",
    createdAt: "2025-05-10",
  },
];

const positions = {
  center: { x: 0, rotateY: 0, scale: 1, filter: "blur(0)", opacity: 1, zIndex: 30 },
  left1: { x: -140, rotateY: 25, scale: 0.85, filter: "blur(1.2px)", opacity: 0.75, zIndex: 20 },
  left2: { x: -280, rotateY: 45, scale: 0.7, filter: "blur(2px)", opacity: 0.5, zIndex: 10 },
  right1: { x: 140, rotateY: -25, scale: 0.85, filter: "blur(1.2px)", opacity: 0.75, zIndex: 20 },
  right2: { x: 280, rotateY: -45, scale: 0.7, filter: "blur(2px)", opacity: 0.5, zIndex: 10 },
};

const colorStyles = {
  center: {
    background: "white",
    color: "#034d03",
    border: "2px solid #aaa",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    cursor: "default",
  },
  left1: {
    background: "#f7f7f7",
    color: "#276627",
    border: "1.5px solid #ccc",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
    cursor: "pointer",
  },
  left2: {
    background: "#fafafa",
    color: "#4a7d4a",
    border: "1px solid #ddd",
    boxShadow: "none",
    cursor: "default",
  },
  right1: {
    background: "#f7f7f7",
    color: "#276627",
    border: "1.5px solid #ccc",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
    cursor: "pointer",
  },
  right2: {
    background: "#fafafa",
    color: "#4a7d4a",
    border: "1px solid #ddd",
    boxShadow: "none",
    cursor: "default",
  },
};

const formatDate = (dateString) => {
  const options = { weekday: "short", year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

export default function CardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = cards.length;

  const getPosition = (index) => {
    let posIndex = (index - activeIndex + totalCards) % totalCards;
    switch (posIndex) {
      case 0:
        return "center";
      case 1:
        return "right1";
      case 2:
        return "right2";
      case totalCards - 1:
        return "left1";
      case totalCards - 2:
        return "left2";
      default:
        return "right2";
    }
  };

  const rotateClockwise = () => setActiveIndex((prev) => (prev + 1) % totalCards);
  const rotateAntiClockwise = () => setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);

  const handleClick = (index) => {
    const pos = getPosition(index);
    if (pos === "left1") rotateAntiClockwise();
    else if (pos === "right1") rotateClockwise();
  };

  return (
    <div className="w-full relative px-4 py-6 bg-white">
      <div className="w-full flex flex-col items-center justify-center px-4 py-10 bg-gray-100 rounded-xl shadow-xl max-w-6xl mx-auto relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute -z-10 w-[500px] h-[500px] rounded-full bg-green-300 opacity-30 blur-3xl top-[25vh] left-1/2 transform -translate-x-1/2"></div>

        {/* Heading */}
        <div className="w-full flex flex-col items-center justify-center border-b border-gray-400 pb-6">
          <div className="relative inline-block">
            <h2 className="relative z-10 text-xl sm:text-2xl md:text-3xl font-bold text-white px-4 sm:px-6 py-2 select-none">
              Testimonials
            </h2>
            <div className="absolute inset-0 z-0 bg-green-600 rounded-md skew-x-[-12deg]"></div>
          </div>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold mt-4 text-gray-800 select-none text-center">
            What People Say About Me
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="relative w-full mt-16 top-[25vh] sm:mt-24"
          style={{
            perspective: "1200px",
            height: "450px",
          }}
        >
          {cards.map((card, index) => {
            const pos = getPosition(index);
            const posStyle = positions[pos];
            const colorStyle = colorStyles[pos];
            return (
              <motion.div
                key={card.id}
                onClick={() => handleClick(index)}
                className="absolute top-1/2 left-1/2 rounded-2xl select-none flex flex-col shadow-md group"
                style={{
                  width: "260px",
                  height: "400px",
                  x: posStyle.x,
                  y: "-50%",
                  rotateY: posStyle.rotateY,
                  scale: posStyle.scale,
                  filter: posStyle.filter,
                  opacity: posStyle.opacity,
                  zIndex: posStyle.zIndex,
                  cursor: colorStyle.cursor,
                  boxShadow: colorStyle.boxShadow,
                  background: colorStyle.background,
                  color: colorStyle.color,
                  border: colorStyle.border,
                  transformOrigin: "center center",
                  position: "absolute",
                  translate: "-50% -50%",
                  userSelect: "none",
                  transition: "box-shadow 0.3s ease",
                }}
                animate={{
                  x: posStyle.x,
                  rotateY: posStyle.rotateY,
                  scale: posStyle.scale,
                  filter: posStyle.filter,
                  opacity: posStyle.opacity,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Top Section */}
                <div className="flex items-center p-4 space-x-4 border-b border-gray-300">
                  <img
                    src={card.logo}
                    alt={card.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-400"
                  />
                  <h3 className="text-lg font-semibold truncate">{card.name}</h3>
                </div>

                {/* Review Text */}
                <div className="flex-grow p-6 text-base sm:text-lg italic leading-relaxed overflow-auto">
                  &ldquo;{card.review}&rdquo;
                </div>

                {/* Created At - Creative Style */}
                <div className="px-5 pb-5 flex justify-end">
                  <div
                    className="flex items-center space-x-2 bg-green-100/50 text-green-700 font-medium text-sm rounded-full px-3 py-1 shadow-md
                    backdrop-blur-sm
                    group-hover:bg-green-200/70
                    transition-colors duration-300 ease-in-out select-none"
                    title={`Created on ${formatDate(card.createdAt)}`}
                  >
                    {/* Calendar Icon SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Created: {formatDate(card.createdAt)}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

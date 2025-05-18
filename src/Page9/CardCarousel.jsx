import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Ali Raza",
    logo: "https://i.pravatar.cc/100?img=1",
    review:
      "Excellent service! The team was responsive and professional. Highly recommended!",
    date: "March 15, 2025",
  },
  {
    id: 2,
    name: "Sara Khan",
    logo: "https://i.pravatar.cc/100?img=2",
    review: "Great experience from start to finish. Will definitely use again.",
    date: "April 2, 2025",
  },
  {
    id: 3,
    name: "Hamid Sheikh",
    logo: "https://i.pravatar.cc/100?img=3",
    review: "Very satisfied with the quality and support. Five stars!",
    date: "April 18, 2025",
  },
  {
    id: 4,
    name: "Zara Ahmed",
    logo: "https://i.pravatar.cc/100?img=4",
    review: "Professional, efficient, and reliable. Highly recommended!",
    date: "May 5, 2025",
  },
  {
    id: 5,
    name: "Omar Farooq",
    logo: "https://i.pravatar.cc/100?img=5",
    review: "Customer service was exceptional. I’m very happy with the results.",
    date: "May 15, 2025",
  },
  {
    id: 6,
    name: "Ayesha Malik",
    logo: "https://i.pravatar.cc/100?img=6",
    review:
      "Top notch work and great communication throughout the process.",
    date: "May 20, 2025",
  },
  {
    id: 7,
    name: "Faisal Iqbal",
    logo: "https://i.pravatar.cc/100?img=7",
    review: "Highly skilled team. Delivered exactly what I needed.",
    date: "May 25, 2025",
  },
  {
    id: 8,
    name: "Nadia Javed",
    logo: "https://i.pravatar.cc/100?img=8",
    review: "Amazing quality and very friendly staff. Will come back again!",
    date: "June 1, 2025",
  },
  {
    id: 9,
    name: "Bilal Hussain",
    logo: "https://i.pravatar.cc/100?img=9",
    review:
      "The best experience I've had with any service provider. Highly recommend!",
    date: "June 10, 2025",
  },
];

const CardCarousel = () => {
  const totalCards = reviews.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("rtl");
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoRotate();
    return () => stopAutoRotate();
  }, [direction]);

  const startAutoRotate = () => {
    stopAutoRotate();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) =>
        direction === "rtl"
          ? (prev + 1) % totalCards
          : (prev - 1 + totalCards) % totalCards
      );
    }, 3000);
  };

  const stopAutoRotate = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handlePrev = () => {
    stopAutoRotate();
    setDirection("ltr");
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    startAutoRotate();
  };

  const handleNext = () => {
    stopAutoRotate();
    setDirection("rtl");
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalCards);
    startAutoRotate();
  };

  // Show 7 cards max (center + 3 left + 3 right)
  const getPosition = (index) => {
    let posIndex = (index - activeIndex + totalCards) % totalCards;
    switch (posIndex) {
      case 0:
        return "center";
      case 1:
        return "right1";
      case 2:
        return "right2";
      case 3:
        return "right3";
      case totalCards - 1:
        return "left1";
      case totalCards - 2:
        return "left2";
      case totalCards - 3:
        return "left3";
      default:
        return null;
    }
  };

  const positions = {
    center: { x: 0, rotateY: 0, scale: 1, zIndex: 50, filter: "none", opacity: 1 },
    left1: { x: "-10vw", rotateY: 20, scale: 0.85, filter: "blur(0.5px)", opacity: 0.75, zIndex: 40 },
    left2: { x: "-20vw", rotateY: 40, scale: 0.7, filter: "blur(2px)", opacity: 0.5, zIndex: 30 },
    left3: { x: "-30vw", rotateY: 60, scale: 0.6, filter: "blur(3px)", opacity: 0.3, zIndex: 20 },
    right1: { x: "10vw", rotateY: -20, scale: 0.85, filter: "blur(0.5px)", opacity: 0.75, zIndex: 40 },
    right2: { x: "20vw", rotateY: -40, scale: 0.7, filter: "blur(2px)", opacity: 0.5, zIndex: 30 },
    right3: { x: "30vw", rotateY: -60, scale: 0.6, filter: "blur(3px)", opacity: 0.3, zIndex: 20 },
  };

  const colorStyles = {
    center: {
      background: "#111827", // dark gray
      color: "#f9fafb", // near white
      border: "2px solid #374151", // slate border
      boxShadow: "0 0 25px rgba(255, 255, 255, 0.15)",
    },
    left1: {
      background: "#1f2937",
      color: "#d1d5db",
      border: "1px solid #4b5563",
    },
    left2: {
      background: "#1f2937",
      color: "#9ca3af",
      border: "1px solid #6b7280",
    },
    left3: {
      background: "#111827",
      color: "#6b7280",
      border: "1px solid #374151",
    },
    right1: {
      background: "#1f2937",
      color: "#d1d5db",
      border: "1px solid #4b5563",
    },
    right2: {
      background: "#1f2937",
      color: "#9ca3af",
      border: "1px solid #6b7280",
    },
    right3: {
      background: "#111827",
      color: "#6b7280",
      border: "1px solid #374151",
    },
  };

  return (
    <section className="min-h-screen bg-[#0C0C0C] flex flex-col items-center justify-center px-6 py-16 sm:py-24">
      {/* Heading */}
      <div className="text-center max-w-4xl mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-100 mb-3 tracking-wide select-none">
          What People Say About Me
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto select-none">
          Real testimonials from clients and colleagues who experienced my work and services firsthand.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-7xl h-[60vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center overflow-visible rounded-3xl">
        {reviews.map((review, index) => {
          const position = getPosition(index);
          if (!position) return null;

          const style = {
            ...colorStyles[position],
            position: "absolute",
            width: "clamp(200px, 20vw, 280px)",
            height: "clamp(280px, 26vw, 380px)",
            padding: "26px",
            borderRadius: "20px",
            transition: "all 0.5s ease-in-out",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            userSelect: "none",
          };

          return (
            <motion.div
              key={review.id}
              style={style}
              animate={{
                x: positions[position].x,
                rotateY: positions[position].rotateY,
                scale: positions[position].scale,
                zIndex: positions[position].zIndex,
                filter: positions[position].filter,
                opacity: positions[position].opacity,
              }}
              transition={{ duration: 0.6 }}
              className="select-none"
              aria-label={`Review by ${review.name}`}
            >
              <img
                src={review.logo}
                alt={`${review.name}'s avatar`}
                className="w-16 h-16 rounded-full mb-5 border-2 border-gray-300 shadow-md"
                draggable={false}
              />
              <h3 className="text-2xl font-semibold mb-3 text-gray-100">{review.name}</h3>
              <p className="text-md italic mb-6 px-4 text-gray-300">{`"${review.review}"`}</p>
              <p className="text-xs text-gray-500 mt-auto">— {review.date}</p>
            </motion.div>
          );
        })}

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-gray-800 rounded-full hover:bg-gray-700 focus:outline-none shadow-lg transition-colors"
          aria-label="Previous Review"
        >
          <ArrowLeft size={28} color="#f9fafb" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-gray-800 rounded-full hover:bg-gray-700 focus:outline-none shadow-lg transition-colors"
          aria-label="Next Review"
        >
          <ArrowRight size={28} color="#f9fafb" />
        </button>
      </div>

      {/* Footer note or call to action (optional) */}
      <p className="mt-14 text-gray-500 max-w-xl text-center select-none">
        These testimonials reflect my commitment and professionalism. Looking forward to adding you here soon!
      </p>
    </section>
  );
};

export default CardCarousel;

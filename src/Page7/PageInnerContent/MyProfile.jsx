import React from "react";

function MyProfile() {
  return (
    <div className="mypro relative overflow-hidden bg-white border border-gray-200 rounded-2xl w-full max-w-[98%] mx-auto shadow-xl">
      
      {/* Profile Header Section */}
      <div className="bgpic rounded-md relative w-full flex flex-col items-center justify-between h-[50vh] bg-gray-100">
        <div
          style={{ backgroundImage: "url(./assets/Mypic.jpg)" }}
          className="circlepic w-[30vh] h-[30vh] rounded-full bg-cover bg-center top-4 relative border-4 border-white"
          loading="lazy" // Lazy load the image
        ></div>
        <div className="textprofile gap-2 bottom-0 absolute md:static flex items-center">
          <p className="text-[6vw] mix-blend-color-dodge font-bold tracking-wide">
            FRONTEND
          </p>
          <p className="text-[6vw] mix-blend-color-dodge font-bold tracking-wide">
            DEVELOPER
          </p>
        </div>
      </div>

      {/* Profile Content Section */}
      <div className="px-6 sm:px-10 py-10 bg-white text-gray-800 space-y-6 text-[clamp(1rem, 4.2vw, 1.15rem)] leading-relaxed text-justify">
        <p>
          👋 My name is <strong className="text-black">Ahmad Sajjad</strong>, a 21-year-old passionate MERN STACK Web Developer with over a 1.5 years of hands-on experience in web technologies. My journey started in 12th grade, and since then, I’ve been creating digital experiences with focus and passion.
        </p>

        <p>
          🎓 Currently pursuing a BSIT degree, I’ve built strong skills in HTML, CSS, JavaScript, Node.js, Express Js, Mongodb, and frameworks like <span className="text-indigo-600 font-semibold">React, Tailwind CSS, GSAP, Locomotive Scroll, and Framer Motion</span>. I’ve also learning more backend technologies to become a Full Stack Developer.
        </p>

        <p>
          🚀 One of my proudest achievements is this animated portfolio website — a true reflection of my creativity and frontend expertise. I believe in building user-friendly, visually stunning interfaces that leave an impression.Currently I am Working on Uber/Indrive Like Web applicaiton
        </p>

        <p>
          🔍 What sets me apart is my problem-solving attitude and consistency. I never give up easily — I break down problems, research thoroughly, and keep going until I find the best solution.
        </p>

        <p>
          🧑‍💻 Although I’m a fresher, I’m eager to step into the professional world, contribute to real-world projects, and grow with a team of talented developers.
        </p>
      </div>
    </div>
  );
}

export default MyProfile;
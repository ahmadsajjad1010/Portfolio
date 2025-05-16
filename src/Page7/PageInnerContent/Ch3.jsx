import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

function Ch3() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    emailjs.send(
      'service_ymot54a',       // 🔁 Replace with your EmailJS service ID
      'template_kpm78ot',      // 🔁 Replace with your EmailJS template ID
      {
        name: data.name,
        email: data.email,
        message: data.message,
      },
      'sDnBl_WZJtfF2goSV'      // 🔁 Replace with your EmailJS public key
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert("Something went wrong. Try again.");
      });

    reset(); // Reset the form after submission
  };

  return (
    <>
      <div
        className="relative w-full min-h-screen overflow-hidden py-8 px-4 sm:px-8 md:px-16"
      >
        {/* Green animated blur background */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          style={{ boxShadow: "0 0 80px 20px rgba(7, 254, 28, 0.3)" }}
          className="absolute top-10 right-8 w-[40vw] sm:w-[30vw] md:w-[25vw] h-[40vw] sm:h-[30vw] md:h-[25vw] bg-[#07FE1C] rounded-full blur-2xl opacity-50 z-0"
        />
        <motion.div
          initial={{ scale: 1, rotate: 0 }}
          animate={{ scale: [1, 1.15, 1], rotate: 45 }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          style={{ boxShadow: "0 0 80px 20px rgba(7, 254, 28, 0.3)" }}
          className="absolute top-[6rem] left-10 w-[60vw] sm:w-[50vw] md:w-[40vw] h-[25vw] sm:h-[20vw] md:h-[15vw] bg-[#07FE1C] rounded-full blur-2xl opacity-50 z-0"
        />

        {/* Background image content area */}
        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1659135890084-930731031f40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="relative z-10 w-full min-h-screen text-white rounded-md flex flex-col justify-between overflow-hidden"
        >
          {/* Top Info */}
          <div className="px-4 sm:px-8 pt-8">
            <p className="text-base md:text-lg font-semibold">TALK TO ME.</p>
            <p className="text-lg font-bold md:text-xl lg:text-2xl">CONTACT WITH ME.</p>
            <p className="text-sm md:text-base text-gray-300">ahmadsajjad1010@gmail.com</p>
          </div>

          {/* Contact Form */}
          <div className="w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[600px] mx-auto mt-10 mb-6 bg-white/20 backdrop-blur-lg bg-opacity-40 rounded-xl p-6 sm:p-8 shadow-2xl text-black">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-white">Want to Contact ME?</h2>

              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
                className="border border-gray-300 bg-transparent px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#07FE1C] shadow-md"
              />
              {errors.name && (
                <p className="text-red-500 text-xs">Name is required</p>
              )}

              <input
                type="email"
                placeholder="Your Email"
                {...register("email", { required: true })}
                className="border border-gray-300 bg-transparent px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#07FE1C] shadow-md"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">Email is required</p>
              )}

              <textarea
                placeholder="Your Message"
                {...register("message", { required: true })}
                className="border border-gray-300 bg-transparent px-4 py-2 rounded-md h-24 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#07FE1C] shadow-md"
              />
              {errors.message && (
                <p className="text-red-500 text-xs">Message is required</p>
              )}

              <button
                type="submit"
                className="bg-[#07FE1C] text-black px-4 py-2 rounded-md shadow-lg hover:bg-green-400 transition-colors duration-200"
              >
                Send
              </button>

              {isSubmitSuccessful && (
                <p className="text-green-600 text-xs mt-2 text-center">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>

          {/* Footer Links */}
        {/* Responsive Footer Links - Always horizontal but spacing & size adapt */}
<div className="w-full px-4 sm:px-8 py-4 border-t border-white flex justify-center md:justify-between items-center flex-wrap gap-x-6 sm:gap-x-10 gap-y-2 text-xs sm:text-sm md:text-base text-white text-center">
  <a
    href="https://www.facebook.com/share/1MrQGnba4P/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline transition-all duration-200"
  >
    Facebook
  </a>
  <a
    href="https://www.linkedin.com/in/ahmad-sajjad-1715bb304"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline transition-all duration-200"
  >
    LinkedIn
  </a>
  <a
    href="https://wa.me/923114154665?text=Hi%20Ahmed%2C%20I%20saw%20your%20portfolio!"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline transition-all duration-200"
  >
    WhatsApp
  </a>
  <a
    href="https://instagram.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline transition-all duration-200"
  >
    Instagram
  </a>
</div>


        </div>
      </div>
    </>
  );
}

export default Ch3;

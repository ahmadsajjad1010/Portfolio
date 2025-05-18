import React, { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

function Ch3() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    reset,
  } = useForm();

  const ref = useRef();
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_ymot54a",
        "template_kpm78ot",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "sDnBl_WZJtfF2goSV"
      );
    } catch (error) {
      console.error("Email sending failed:", error);
    }
    reset();
  };

  // Glowing orb animation
  const Orb = ({ size, color, position }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.3, 0],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 4 + Math.random() * 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full blur-xl ${color}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...position,
      }}
    />
  );

  // Social icons data
  const socialLinks = [
    {
      href: "https://www.facebook.com/share/1MrQGnba4P/",
      label: "Facebook",
      icon: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.02 3.66 9.17 8.44 9.94v-7.03H7.9v-2.9h2.54V9.84c0-2.5 1.5-3.88 3.8-3.88 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.25 0-1.64.78-1.64 1.57v1.89h2.8l-.45 2.9h-2.35v7.03C18.34 21.24 22 17.09 22 12z",
    },
    {
      href: "https://www.linkedin.com/in/ahmad-sajjad-1715bb304",
      label: "LinkedIn",
      icon: "M4.98 3.5C4.98 4.88 3.89 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.11 7h4.74v13H.11zM7.45 7h4.53v1.94h.06c.63-1.19 2.17-2.44 4.46-2.44 4.77 0 5.65 3.13 5.65 7.2V20H17.5v-6.44c0-1.53-.03-3.49-2.13-3.49-2.14 0-2.47 1.67-2.47 3.4V20H7.45z",
    },
    {
      href: "https://wa.me/923114154665?text=Hi%20Ahmed%2C%20I%20saw%20your%20portfolio!",
      label: "WhatsApp",
      icon: "M20.52 3.48A11.9 11.9 0 0012 0C5.37 0 .06 5.4.06 12.08c0 2.13.56 4.1 1.54 5.77L0 24l6.34-1.65a11.93 11.93 0 005.66 1.44h.02c6.62 0 12-5.37 12-12 0-3.2-1.25-6.2-3.5-8.31zM12 21.72a9.64 9.64 0 01-4.91-1.37l-.35-.21-3.76.98.99-3.66-.23-.37a9.49 9.49 0 01-1.46-5.1c0-5.28 4.3-9.58 9.6-9.58a9.57 9.57 0 019.6 9.58c0 5.27-4.3 9.58-9.6 9.58zm5.25-7.19c-.28-.14-1.65-.81-1.9-.9-.25-.1-.43-.14-.62.14-.18.28-.7.9-.86 1.08-.16.18-.31.2-.58.07-.27-.14-1.13-.41-2.15-1.32-.8-.72-1.35-1.61-1.5-1.89-.16-.28-.02-.43.12-.57.12-.12.27-.31.4-.46.13-.15.17-.26.27-.43.1-.18.05-.32-.02-.46-.07-.14-.62-1.5-.85-2.04-.22-.53-.45-.46-.62-.47-.16-.02-.34-.02-.52-.02-.18 0-.46.07-.7.32-.24.25-.92.9-.92 2.2 0 1.29.94 2.54 1.07 2.72.13.18 1.85 2.84 4.48 3.98.63.27 1.12.43 1.5.55.63.19 1.2.16 1.65.1.5-.06 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32z",
    },
    {
      href: "https://instagram.com/yourusername",
      label: "Instagram",
      icon: "M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.25 3a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Orb size={400} color="bg-emerald-500/10" position={{ top: "20%", left: "10%" }} />
        <Orb size={300} color="bg-cyan-500/10" position={{ bottom: "15%", right: "15%" }} />
        <Orb size={500} color="bg-purple-500/10" position={{ top: "50%", right: "5%" }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Main content */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 xl:gap-24"
        >
          {/* Left content */}
          <motion.div 
            className="lg:w-1/2 flex flex-col justify-center"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Let's Connect
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I'm always excited to collaborate on new projects or just chat about tech. 
              Drop me a message and I'll get back to you as soon as possible!
            </motion.p>

            {/* Contact info */}
            <motion.div 
              className="space-y-4 mb-12"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center group-hover:bg-emerald-800/70 transition-all duration-300">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:ahmadsajjad1010@gmail.com" className="text-gray-300 hover:text-emerald-400 transition-colors text-lg">
                  ahmadsajjad1010@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center group-hover:bg-emerald-800/70 transition-all duration-300">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+923114154665" className="text-gray-300 hover:text-emerald-400 transition-colors text-lg">
                  +92 311 4154665
                </a>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div 
              className="flex gap-4"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-gray-900/70 backdrop-blur-sm flex items-center justify-center hover:bg-emerald-900/50 transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <svg 
                    className="w-6 h-6 text-gray-400 group-hover:text-emerald-400 transition-colors" 
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - Form */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-2xl p-8 md:p-10 border border-gray-700/50 shadow-2xl shadow-emerald-900/10 hover:shadow-emerald-900/20 transition-all duration-500">
              <motion.h2 
                className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                Send Me a Message
              </motion.h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full px-5 py-3 rounded-lg bg-gray-800/70 border ${errors.name ? 'border-red-500' : 'border-gray-700 hover:border-emerald-500/50 focus:border-emerald-500'} transition-colors duration-300 outline-none text-gray-200 placeholder-gray-500`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <motion.p 
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="mt-2 text-sm text-red-400"
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={`w-full px-5 py-3 rounded-lg bg-gray-800/70 border ${errors.email ? 'border-red-500' : 'border-gray-700 hover:border-emerald-500/50 focus:border-emerald-500'} transition-colors duration-300 outline-none text-gray-200 placeholder-gray-500`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <motion.p 
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="mt-2 text-sm text-red-400"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.9 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message", { required: "Message is required" })}
                    className={`w-full px-5 py-3 rounded-lg bg-gray-800/70 border ${errors.message ? 'border-red-500' : 'border-gray-700 hover:border-emerald-500/50 focus:border-emerald-500'} transition-colors duration-300 outline-none text-gray-200 placeholder-gray-500`}
                    placeholder="Hello Ahmed, I'd like to talk about..."
                  />
                  {errors.message && (
                    <motion.p 
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="mt-2 text-sm text-red-400"
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-gray-900 hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-emerald-500/30'}`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </motion.div>

                <AnimatePresence>
                  {isSubmitSuccessful && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-4 p-4 bg-emerald-900/30 border border-emerald-500/30 rounded-lg text-center"
                    >
                      <div className="flex items-center justify-center gap-2 text-emerald-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Message sent successfully! I'll get back to you soon.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer 
          className="text-center mt-20 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          © {new Date().getFullYear()} Ahmad Sajjad. All rights reserved.
        </motion.footer>
      </div>
    </div>
  );
}

export default Ch3;
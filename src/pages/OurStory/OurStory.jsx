import React from "react";
import "./OurStory.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function OurStory() {
  const { ref, inView } = useInView({
    threshold: 0.2, // ✅ triggers when 20% of section is visible
    triggerOnce: false, // ✅ runs every time it comes into view
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const counters = [
    { end: 100, label: "Tech Experts", color: "pink" },
    { end: 786, label: "Happy Clients", color: "yellow" },
    { end: 2157, label: "Successful Projects", color: "blue" },
    { end: 16, label: "Countries", color: "purple" },
  ];

  return (
    <section className="our-story relative" ref={ref}>
      {/* 🔥 Background Blobs with 3D Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-72 h-72 bg-gradient-to-br from-blue-400 to-blue-600 
                        rounded-full opacity-50 absolute top-10 left-20 
                        blur-3xl shadow-3xl shadow-blue-800/40 
                        transform rotate-12 animate-pulse"></div>

        <div className="w-80 h-80 bg-gradient-to-br from-purple-400 to-purple-700 
                        rounded-full opacity-50 absolute top-40 right-20 
                        blur-3xl shadow-3xl shadow-purple-900/40 
                        transform -rotate-6 animate-pulse"></div>

        <div className="w-60 h-60 bg-gradient-to-br from-yellow-300 to-orange-400 
                        rounded-full opacity-50 absolute bottom-20 left-1/3 
                        blur-3xl shadow-2xl shadow-yellow-700/40 
                        transform rotate-3 animate-pulse"></div>
      </div>

      <div className="our-story-container">
        {/* Left Big Circle */}
        <motion.div
          className="big-circle"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="circle-logo">CodexWagon</div>
          <div className="small-circle">
            <h3>{inView && <CountUp start={0} end={10} duration={3} />}+</h3>
            <p>Years of Experience</p>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="our-story-right"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        >
          <h2>
            Steps into the World of <span>Digital Innovations</span>
          </h2>
          <p>
            <strong>CodexWagon</strong> is a leading digital solutions company
            in Kerala, specializing in <strong>web development</strong>,{" "}
            <strong>mobile app development</strong>,{" "}
            <strong>cloud services</strong>, and{" "}
            <strong>AI-powered solutions</strong>. We design scalable websites,
            user-friendly apps, secure cloud infrastructures, and smart
            automation tools that help businesses grow, stay competitive, and
            future-ready. With a focus on innovation and custom solutions, our
            expert team ensures your ideas turn into impactful digital
            experiences, making CodexWagon your trusted technology partner in
            Kerala and beyond.
          </p>
        </motion.div>
      </div>

      {/* Counters */}
      <div className="counters-row">
        {counters.map((item, index) => (
          <motion.div
            key={index}
            className={`counter-item ${item.color}`}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: index * 0.2 }}
          >
            <h3>
              {inView && (
                <CountUp
                  start={0}
                  end={item.end}
                  duration={3}
                  suffix="+"
                />
              )}
            </h3>
            <div className="underline"></div>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

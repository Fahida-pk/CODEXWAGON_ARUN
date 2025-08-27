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
    <section className="our-story" ref={ref}>
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
            <h3>
              {inView && <CountUp start={0} end={10} duration={3} />}+
            </h3>
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
            <strong>CodexWagon</strong> is a leading digital solutions company in Kerala,
            delivering high-quality <strong>web development</strong>, 
            <strong>mobile app development</strong>, 
            <strong>cloud services</strong>, and 
            <strong>AI-powered solutions</strong>. With a focus on innovation and
            performance, we help businesses build scalable digital platforms that
            transform ideas into impactful experiences. We design and deliver scalable websites, user-friendly mobile applications, 
            and secure cloud infrastructures that create powerful digital experiences. 
            Our expertise in <strong>AI solutions</strong> and <strong>business automation in Kerala</strong> 
            ensures that your brand stays competitive and future-ready.
          </p>

          <p>
            Our team of experts is dedicated to understanding your unique requirements 
            and creating customized solutions that drive growth and success. Whether you need 
            a robust website, a feature-rich mobile app, secure cloud infrastructure, or 
            <strong>AI-based business automation</strong>, CodexWagon is your trusted 
            technology partner in Kerala and beyond.
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
              {inView && <CountUp start={0} end={item.end} duration={3} suffix="+" />}
            </h3>
            <div className="underline"></div>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

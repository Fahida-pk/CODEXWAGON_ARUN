import React from "react";
import "./OurStoryPage.css";
import TechnologicalFrameworks from "./TechnologicalFrameworks";
import ServicesAndFrameworks from "./ServicesAndFrameworks";

// Navbar
import Navigation from "../components/Navigation/Navbar.jsx";

// Animation + Counter
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function OurStoryPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Navbar */}
      <Navigation />

      {/* Page Content */}
      <div className="our-story-page">
        {/* Hero Section */}
        <section className="hero-section">
          <motion.div
            className="hero-text"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2>
              OUR <span>STORY</span>
            </h2>
            <p>
              We are truly grateful to you for choosing us as your partner and
              giving us the opportunity to grow.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <motion.div
              className="stat-card blue"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3>
                <CountUp start={0} end={750} duration={3} suffix="+" />
              </h3>
              <p>Happy Clients</p>
            </motion.div>

            <motion.div
              className="stat-card purple"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3>
                <CountUp start={0} end={10} duration={3} />
              </h3>
              <p>Years of Experience</p>
            </motion.div>

            <motion.div
              className="stat-card yellow wide"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3>
                <CountUp start={0} end={2100} duration={3} suffix="+" />
              </h3>
              <p>Successful Projects</p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="content-section">
          <motion.div
            className="ideas-block"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3>
              Let's Talk <span>IDEAS</span>
            </h3>
            <p>
              My Business – your perfect partner for complete digital solutions.
            </p>
          </motion.div>

          <motion.div
            className="innovation-block"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            <h2>
              Step Into The World <span>Of Digital Innovations</span>
            </h2>
            <p>
              CodexWagon is one of the best tech solution providers in Kerala, trusted by a strong clientele across industries. As a leading technology company in Kerala, we specialize in delivering innovative and customized digital solutions. Our expertise covers web development in Kerala, mobile development in Kerala, cloud services in Kerala, and AI services in Kerala, ensuring businesses stay ahead in the digital era.
            </p>
            <p>
              Our team of skilled professionals listens carefully to your requirements before designing tailor-made solutions. We focus on building scalable, secure, and performance-driven platforms that help businesses grow. With years of experience delivering projects for clients across Kerala, CodexWagon has earned a reputation as a complete digital solution provider in Kerala.
            </p>
            <p>
             We design cost-effective and SEO-friendly solutions using the latest tools and frameworks, helping businesses strengthen their online presence without overspending. Known for our professionalism, innovation, and client-first approach, CodexWagon provides the right digital strategies to attract your target audience and maximize ROI.
            </p>
            <p>As a fast-growing technology company in Kerala, we are committed to delivering web, mobile, cloud, and AI-powered solutions that empower businesses, increase efficiency, and drive sustainable growth.</p>
          </motion.div>
         
        </section>
        <ServicesAndFrameworks />
        <TechnologicalFrameworks />

      </div>
    </>
  );
}

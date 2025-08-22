import React from "react";
import { motion } from "framer-motion";
import "./TechnologicalFrameworks.css";

const techs = [
  "C#", "Angular", "PHP", "Android", "iOS", "Golang", "Java", "Node.js",
  "Rails", "Python", ".NET", "React", "Swift", "Kotlin", "Vue.js"
];

export default function TechnologicalFrameworks() {
  return (
    <section className="frameworks-section">
      <h2>
        <span className="highlight">Technological</span> frameworks
      </h2>
      <p>Our 60+ team has expertise in almost every programming language.</p>

      {/* Moving Cloud */}
      <div className="cloud-wrapper">
        <motion.div
          className="cloud-row"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {techs.map((t, i) => (
            <span key={i} className="cloud-item">{t}</span>
          ))}
          {/* Duplicate for seamless scroll */}
          {techs.map((t, i) => (
            <span key={`dup-${i}`} className="cloud-item">{t}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

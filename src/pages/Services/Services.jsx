import React from "react";
import "./Services.css";
import { motion } from "framer-motion";

// ✅ Detailed Services Data (SEO friendly with Kerala focus)
const services = [
  {
    title: "Web Development in Kerala",
    description:
      "Boost your online presence with custom web development solutions in Kerala. Our expert developers craft responsive, SEO-friendly websites tailored for your business needs.",
    icon: "💻",
  },
  {
    title: "Mobile Development in Kerala",
    description:
      "Deliver high-performance mobile applications in Kerala for Android & iOS. Enhance engagement with feature-rich, user-friendly mobile solutions.",
    icon: "📱",
  },
  {
    title: "Cloud Services in Kerala",
    description:
      "Secure and scalable cloud services in Kerala that optimize business performance. Migrate, manage, and grow with our tailored cloud strategies.",
    icon: "☁️",
  },
  {
    title: "AI Services in Kerala",
    description:
      "Empower your business with AI-powered services in Kerala. From chatbots to predictive analytics, unlock smarter digital transformations.",
    icon: "🤖",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-box">
        {/* ✅ Heading with Motion like Intersmart */}
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.span
            className="light"
            whileHover={{ rotate: [-2, 2, -2, 2, 0] }}
            transition={{ duration: 0.4 }}
          >
            World Class Services For
          </motion.span>
          <br />
          <motion.span
            className="bold"
            whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 1, 0] }}
            transition={{ duration: 0.4 }}
          >
            Crafting Your Web Success Story
          </motion.span>
        </motion.h2>

        {/* ✅ Services Cards */}
        <div className="services-container">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#">VIEW MORE +</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

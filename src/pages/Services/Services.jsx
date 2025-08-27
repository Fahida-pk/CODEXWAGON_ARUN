import React from "react";
import "./Services.css";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Define API Base from .env
const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5001";

// ✅ Detailed Services Data (SEO friendly)
const services = [
 {
  title: "Cloud Computing",
  description:
    "Leverage scalable and secure cloud computing solutions to enhance flexibility, reduce costs, and drive innovation. Optimize your business operations with cloud migration, storage, and managed services.",
  icon: (
    <img
      src="https://cdn-icons-png.flaticon.com/512/3796/3796815.png"
      alt="Cloud Computing"
      width="67"
      height="63"
      loading="lazy"
    />
  ),
  link: `${API_BASE}/cloud-computing/`,
},



  {
    title: "Mobile Application",
    description:
      "Boost engagement with high-performing, feature-packed mobile apps for Android and iOS that drive digital transformation. Build the best mobile applications for all your needs with App development genies at Inter Smart.",
    icon: (
      <img
        src="https://www.intersmartsolution.com/wp-content/uploads/2023/11/MobApp.svg"
        alt="Mobile Application"
        width="67"
        height="63"
        loading="lazy"
      />
    ),
    link: `${API_BASE}/mobile-app-development/`,
  },
  {
    title: "Search Engine Optimization",
    description:
      "Dominate search engine results with effective SEO campaigns tailored to your business goals and target audience. Rank your website on top search engine results and stand out among competitors.",
    icon: (
      <img
        src="https://www.intersmartsolution.com/wp-content/uploads/2025/01/seo.png"
        alt="SEO"
        width="67"
        height="63"
        loading="lazy"
      />
    ),
    link: `${API_BASE}/seo/`,
  },
  {
    title: "Web Development",
    description:
      "Boost your online presence with custom web development, intuitive design, and responsive layouts for all devices. Connect with your audience, generate leads and grow with a powerful website.",
    icon: (
      <img
        src="https://www.intersmartsolution.com/wp-content/uploads/2023/11/WebDev.svg"
        alt="Web Development"
        width="67"
        height="63"
        loading="lazy"
      />
    ),
    link: `${API_BASE}/web-development/`,
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-box">
        {/* ✅ Heading with Motion */}
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

        {/* ✅ Services Cards Carousel */}
        <Slider
          className="services-carousel"
          dots={false}
          infinite={true}
          speed={800}
          slidesToShow={4}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={2500}
          responsive={[
            { breakpoint: 1000, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } },
          ]}
        >
          {services.map((service, index) => (
            <a
              key={index}
              className="ServBox WebDev"
              href={service.link}
              style={{
                display: "block",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div className="Icon">{service.icon}</div>
              <div className="ServName">
                {service.title.includes("Development") ? (
                  <>
                    {service.title.replace("Development", "")}
                    <br />
                    Development
                  </>
                ) : (
                  service.title
                )}
              </div>
              <div
                className="Bar"
                style={{
                  height: 5,
                  background: "#00bfff",
                  borderRadius: 2,
                  margin: "12px auto",
                  width: 60,
                }}
              ></div>
              <div className="Info">{service.description}</div>
              <div className="ViewMore">
                <span>View more</span>
                <span style={{ marginLeft: 6 }}>+</span>
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </section>
  );
}

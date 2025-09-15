import React, { useState, useEffect } from "react";
import "./MainBanner.css";

const images = [
  "https://altostechnologies.in/static/img/image-1.png",
   "/public/images/image.jpeg",
  "https://altostechnologies.in/static/img/bg1.gif",
 
  "https://t4.ftcdn.net/jpg/06/10/72/89/360_F_610728942_koLvP7xF0ypcsfIkxAftJ5uZ87TCtEBE.webp",
  "https://octavius.ai/wp-content/uploads/2023/10/1_k4IDvhbuf0rgLkMRml3hcA-scaled.webp",
];

const MainBanner = () => {
  // random start on refresh
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * images.length)
  );

  // auto change every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 🔥 every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="main-banner">
      <div className="banner-slider">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>

      {/* Overlay */}
      <div className="banner-overlay"></div>
    </section>
  );
};

export default MainBanner;

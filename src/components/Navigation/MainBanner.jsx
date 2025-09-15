import React, { useState, useEffect } from "react";
import "./MainBanner.css";

const images = [
  "https://altostechnologies.in/static/img/image-1.png",
  "https://www.intersmartsolution.com/wp-content/uploads/2025/08/2.jpg",
  "https://altostechnologies.in/static/img/bg1.gif",
  "https://www.osperb.com/static/media/zeston-app.efcbb115.jpg",
  "https://www.ksofttechnologies.com/_next/image?url=%2Fassets%2Fimage%2Fpagebanner%2Fpage-header-bg.jpg&w=1920&q=90",
  "https://projonmodigital.com/wp-content/uploads/2024/09/Most-Effective-SEO-Tips-for-Beginner-Business.jpg",
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

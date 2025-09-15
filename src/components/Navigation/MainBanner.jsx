import React, { useState, useEffect } from "react";
import "./MainBanner.css";

const images = [
  "https://altostechnologies.in/static/img/image-1.png",
   "https://img.freepik.com/free-photo/web-design-concepts-with-blurred-background_1134-82.jpg?t=st=1757952567~exp=1757956167~hmac=fd2c28aad94569a8366148717404620f50c50520ebbf94157384bb477eadbc6e&w=1480",
  "https://altostechnologies.in/static/img/bg1.gif",
  "https://img.freepik.com/premium-psd/cloud-computing-network_854300-3306.jpg?w=1480",
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

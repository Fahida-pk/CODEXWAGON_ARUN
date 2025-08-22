import React, { useState, useEffect } from "react";
import "./MainBanner.css";

const images = [
  "/assets/images/image1.jpg",
   
  "/assets/images/image3.jpg",
  "/assets/images/image4.jpg",
  "/assets/images/image5.jpg",
  "/assets/images/image6.jpg",
  "/assets/images/image7.jpg",
  
];

const MainBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000); // auto slide every 4s
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      className="main-banner"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
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
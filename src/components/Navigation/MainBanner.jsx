import React, { useState, useEffect } from "react";
import "./MainBanner.css";

const images = [
   "/assets/images/image3.jpg",
  "/assets/images/image4.jpg",
 "https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg",
 "https://tse2.mm.bing.net/th/id/OIP.I4pi7F_FHdAKH6YPCUy0dAHaE8?pid=Api&H=106&W=160",
 "https://projonmodigital.com/wp-content/uploads/2024/09/Most-Effective-SEO-Tips-for-Beginner-Business.jpg",
"https://octavius.ai/wp-content/uploads/2023/10/1_k4IDvhbuf0rgLkMRml3hcA-scaled.webp",
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
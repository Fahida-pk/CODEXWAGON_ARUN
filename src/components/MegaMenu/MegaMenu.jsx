import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./MegaMenu.css";

export default function MegaMenu({ onClose }) {
  const navigate = useNavigate();
  const [closing, setClosing] = useState(false);

  const services = [
    {
      icon: "https://www.intersmartsolution.com/wp-content/uploads/2023/11/WebDev.svg",
      title: "Web Design in Kerala",
      color: "#00c9a7",
      items: [
        "Responsive Websites",
        "Ecommerce Development",
        "WordPress Development",
        "Custom CMS",
      ],
    },
    {
      icon: "https://www.intersmartsolution.com/wp-content/uploads/2023/11/MobApp.svg",
      title: "Mobile Development in Kerala",
      items: ["Android Apps", "iOS Apps", "Cross-Platform Apps", "UI/UX Design"],
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3796/3796815.png",
      title: "Cloud Computing in Kerala",
      items: [
        "Cloud Migration",
        "AWS Services",
        "Azure Solutions",
        "Cloud Security",
      ],
    },
    {
      icon: "https://www.intersmartsolution.com/wp-content/uploads/2025/01/seo.png",
      title: "SEO & Digital Marketing",
      items: [
        "SEO Services",
        "Social Media Marketing",
        "PPC Advertising",
        "Lead Generation",
      ],
    },
  ];

  const handleNavigate = (path) => {
    startClose(() => navigate(path));
  };

  const startClose = (callback) => {
    setClosing(true);
    setTimeout(() => {
      onClose();
      if (callback) callback();
    }, 800); // Matches CSS animation time
  };

  return (
    <div className={`mega-menu-overlay ${closing ? "close" : ""}`}>
      <div className="mega-menu-container">
        {/* Left Section */}
        <div className="mega-menu-left">
          {/* Logo clickable */}
          <h2
            className="logo"
            style={{ cursor: "pointer" }}
            onClick={() => handleNavigate("/")}
          >
            CODEXWAGON
          </h2>

          <ul className="menu-links">
            <li onClick={() => handleNavigate("/")}>HOME</li>
            <li onClick={() => handleNavigate("/about")}>ABOUT US</li>
            <li onClick={() => handleNavigate("/careers")}>CAREERS</li>
            <li onClick={() => handleNavigate("/approach")}>OUR APPROACH</li>
            <li onClick={() => handleNavigate("/contact")}>CONTACT</li>
          </ul>

          <div className="contact-info">
            <p>Talk to our expert today</p>
            <p>
              <FaEnvelope /> <a href="mailto:achithran@gmail.com">achithran@gmail.com</a>
            </p>
            <p>
              <FaPhoneAlt />  <a href="tel:+919961959788">+91 99619 59788</a>

            </p>
          </div>

          <div className="social-icons">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Right Section */}
        <div className="mega-menu-right">
          <button className="close-btn" onClick={() => startClose()}>
            CLOSE MENU <FiX />
          </button>
          <div className="service-columns">
            {services.map((service, index) => (
              <div className="service-column" key={index}>
                <div className="service-icon">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="service-img"
                  />
                </div>
                <h3>{service.title}</h3>
                <ul>
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

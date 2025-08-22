import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMobileAlt,
  FaCloud,
  FaRobot,
  FaGlobe
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
      icon: <FaGlobe />,
      title: "Web Design in Kerala",
      color: "#00c9a7",
      items: [
        "Responsive Websites",
        "Ecommerce Development",
        "WordPress Development",
        "Custom CMS"
      ]
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Development in Kerala",
      color: "#ff5722",
      items: ["Android Apps", "iOS Apps", "Cross-Platform Apps", "UI/UX Design"]
    },
    {
      icon: <FaCloud />,
      title: "Cloud Computing in Kerala",
      color: "#2196f3",
      items: ["Cloud Migration", "AWS Services", "Azure Solutions", "Cloud Security"]
    },
    {
      icon: <FaRobot />,
      title: "AI Solutions in Kerala",
      color: "#8a2be2",
      items: ["AI Chatbots", "Machine Learning", "Data Analytics", "Automation"]
    }
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
          <h2 className="logo">CODEXWAGON</h2>
          <ul className="menu-links">
            <li onClick={() => handleNavigate("/")}>HOME</li>
            <li onClick={() => handleNavigate("/about")}>ABOUT US</li>
            <li onClick={() => handleNavigate("/careers")}>CAREERS</li>
            <li onClick={() => handleNavigate("/approach")}>OUR APPROACH</li>
            <li onClick={() => handleNavigate("/contact")}>CONTACT</li>
          </ul>

          <div className="contact-info">
            <p>Talk to our expert today</p>
            <p><FaEnvelope /> sales@codexwagon.in</p>
            <p><FaPhoneAlt /> +91 9645230861</p>
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
                <div
                  className="service-icon"
                  style={{ color: service.color }}
                >
                  {service.icon}
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

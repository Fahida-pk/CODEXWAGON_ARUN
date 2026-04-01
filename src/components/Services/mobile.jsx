import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation/Navbar.jsx";

export default function WebDevelopment() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 px-8 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Web Development in Kerala
        </h1>
        <p className="text-gray-700 leading-relaxed">
          Our web development services provide a robust, scalable,
          and secure platform for your business. We build custom
          solutions using modern frameworks and best practices.
        </p>

        {/* 👉 Contact button */}
        <button
          onClick={() => navigate("/contact")}
          className="border border-gray-600 rounded-full px-6 py-2 hover:bg-gray-900 hover:text-white transition"
        >
          Contact Us
        </button>
      </div>

      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src="https://webcastletech.com/wp-content/uploads/2024/06/web-development-image.png"
          alt="Web Development"
          className="w-72 md:w-96 object-contain"
        />
        <Navigation />
      </div>
    </div>
  );
}

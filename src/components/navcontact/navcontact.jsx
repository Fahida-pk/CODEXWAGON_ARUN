import React from "react";
import { FaHeadset } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import Navigation from "../../components/Navigation/Navbar.jsx";
import ContactForm from "../../pages/ContactForm/ContactForm.jsx";
import ContactStrip from "./ContactStrip.jsx";
import "./Navcontact.css"; // custom css

const NavContact = () => {
  return (
    <>
      {/* ✅ Navbar */}
      <Navigation />

      {/* ✅ Section */}
      <section className="relative bg-[#f4f7fb] pt-56 pb-10 font-poppins overflow-hidden">
        {/* Floating Gradient Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-72 h-72 bg-blue-200 rounded-full opacity-40 absolute top-10 left-20 blur-3xl"></div>
          <div className="w-80 h-80 bg-purple-200 rounded-full opacity-40 absolute top-40 right-20 blur-3xl"></div>
          <div className="w-60 h-60 bg-yellow-200 rounded-full opacity-40 absolute bottom-20 left-1/3 blur-3xl"></div>
          <div className="w-60 h-60 bg-gray-200 rounded-full opacity-40 absolute bottom-20 left-1/3 blur-3xl"></div>
          <div className="w-60 h-60 bg-red-200 rounded-full opacity-40 absolute bottom-20 left-1/3 blur-3xl"></div>
          <div className="w-60 h-60 bg-pink-200 rounded-full opacity-40 absolute bottom-20 left-1/3 blur-3xl"></div>
        </div>

        <div className="container relative mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-xl z-10">
              {/* Main Heading */}
              <h1 className="font-poppins text-3xl md:text-5xl font-light leading-snug">
                <span className="block">
                  Get in
                  <span className="inline-block w-3 h-16 md:h-20 bg-yellow-300 ml-3 align-middle"></span>
                </span>
                <span className="block text-[90px] md:text-[130px] font-extrabold leading-none tracking-tight mt-2">
                  Touch
                </span>
              </h1>
              <p className="mt-8 text-gray-700 text-lg font-medium max-w-2xl leading-relaxed">
                CONTACT CODEXWAGON FOR THE BEST WEB DEVELOPMENT, AI SERVICES, CLOUD COMPUTING & MOBILE DEVELOPMENT
              </p>
            </div>

            {/* Right Content – Floating Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Side Card */}
              <div className="bg-white rounded-2xl shadow-lg p-10 text-center hover:shadow-xl transition max-w-xs mx-auto">
                <FaHeadset className="text-6xl text-pink-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold">24/7 support</h3>
              </div>

              {/* Right Side Top Card */}
              <div className="bg-white rounded-2xl shadow-lg p-10 text-center hover:shadow-xl transition max-w-xs mx-auto">
                <MdEmail className="text-6xl text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold">Meet us over email</h3>
              </div>

              {/* Bottom Center Card */}
              <div className="bg-white rounded-2xl shadow-lg p-10 text-center hover:shadow-xl transition max-w-xs mx-auto lg:col-span-2">
                <BsChatDots className="text-6xl text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold">Online chat support</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactStrip />

      {/* ✅ Brush Style Heading */}
    

      {/* ✅ Contact Form Below */}
      <ContactForm />
        <div className="text-center py-16">
        <h2 className="brush-heading">Talk To Us</h2>
      </div>
    </>
  );
};

export default NavContact;

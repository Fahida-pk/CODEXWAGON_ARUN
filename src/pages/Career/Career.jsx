import React from "react";
import Navigation from "../../components/Navigation/Navbar.jsx";
import CareerJoin from "./CareerJoin";

const CareerBanner = () => {
 const items = [
  {
    id: 1,
    img: "/images/team.png",   // ✅ ninte upload cheytha "Team bonding programs" icon
    text: "Team bonding programs",
  },
  {
    id: 2,
    img: "/images/training.png.png", // ✅ "Training & Development" icon
    text: "Training & Development",
  },
  {
    id: 3,
    img: "/images/reward.png", // ✅ "Rewarding Career" icon
    text: "Rewarding Career",
  },
];


  return (
    <>
      {/* ✅ Navbar */}
      <Navigation />
     

      <section className="relative bg-gray-100 pt-56 pb-10 font-poppins overflow-hidden">

        {/* ✅ Background Shapes */}
        <div className="absolute inset-0">
          <div className="w-72 h-72 bg-blue-200 rounded-full opacity-40 absolute top-10 left-20 blur-3xl"></div>
          <div className="w-80 h-80 bg-purple-300 rounded-full opacity-40 absolute top-40 right-20 blur-3xl"></div>
          <div className="w-60 h-60 bg-yellow-200 rounded-full opacity-40 absolute bottom-20 left-1/3 blur-3xl"></div>
        </div>

        {/* ✅ Content */}
        <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          {/* Left Text Section */}
          {/* Left Text Section */}
<div className="max-w-lg">
  {/* Main Heading */}
  <h1 className="text-5xl font-light leading-snug">
  Let Your <br />
  <span className="block text-[130px] font-extrabold leading-none tracking-tight relative">
  <span className="absolute left-2 top-2 text-gray-400">Dream</span>
  <span className="relative text-black">Dream</span>
</span>


</h1>

  {/* Tagline */}
  <p className="mt-6 text-gray-600 text-lg font-medium">
    THE ONLY WAY TO DO GREAT WORK, IS TO LOVE WHAT YOU DO.
  </p>

  {/* ✅ Big Gap before Our Dream */}
  
</div>


          {/* Right Icons Section */}
          {/* Right Icons Section */}
<div className="flex flex-col items-center gap-8 mt-10 md:mt-0">
  {/* 🔹 Top Row (2 cards) */}
  <div className="flex gap-8">
    {items.slice(0, 2).map((item) => (
      <div
        key={item.id}
        className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition w-56"
      >
        <div className="iconImg mb-4">
          <img
            src={item.img}
            alt={item.text}
            className="h-16 w-16 object-contain"
          />
        </div>
        <div className="Txt font-semibold text-gray-800">
          {item.text}
        </div>
      </div>
    ))}
  </div>

  {/* 🔹 Bottom Row (1 card, centered) */}
  <div>
    <div
      key={items[2].id}
      className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition w-56"
    >
      <div className="iconImg mb-4">
        <img
          src={items[2].img}
          alt={items[2].text}
          className="h-16 w-16 object-contain"
        />
      </div>
      <div className="Txt font-semibold text-gray-800">
        {items[2].text}
      </div>
    </div>
  </div>
</div>
</div>
       
      </section>
       <CareerJoin />
  
    </>
 );   
  
};

export default CareerBanner;

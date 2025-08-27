import React, { useState } from "react";

const CareerJoin = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <section className="relative bg-white py-40 font-poppins overflow-hidden">
      {/* 🔹 Background Shapes */}
      <div className="absolute inset-0">
        <div className="w-72 h-72 bg-blue-200 rounded-full opacity-40 absolute top-10 left-20 blur-3xl"></div>
        <div className="w-80 h-80 bg-purple-300 rounded-full opacity-40 absolute top-40 right-20 blur-3xl"></div>
        <div className="w-60 h-60 bg-yellow-200 rounded-full opacity-40 absolute bottom-20 left-1/3 blur-3xl"></div>
      </div>

      {/* 🔹 Content */}
      <div className="container mx-auto px-6 text-center relative">
        {/* Heading */}
        <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400">
          Join Our Team
        </h2>

        {/* Small Tagline */}
        <p className="mt-6 text-gray-700 text-lg max-w-2xl mx-auto">
          We believe in innovation, collaboration, and growth. Come, be a part of our journey and
          build something amazing together.
        </p>

        {/* Button */}
        <div className="mt-10">
          <button
            onClick={() => setShowMessage(true)}
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-yellow-400 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            View Open Positions
          </button>
        </div>
      </div>

      {/* 🔹 Popup Modal */}
      {showMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-10 text-center max-w-md mx-auto relative">
            {/* Gradient Text */}
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent">
              No Opening Today
            </h3>
            <p className="mt-4 text-gray-600 text-lg">
              We will update soon. Stay connected!
            </p>

            {/* Close Button */}
            <button
              onClick={() => setShowMessage(false)}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 text-white rounded-full font-semibold shadow-md hover:scale-105 transition"
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CareerJoin;

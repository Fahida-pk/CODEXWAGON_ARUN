import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem("popupShown");
    if (hasShown) return;

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowPopup(true);
        sessionStorage.setItem("popupShown", "true");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2500); // auto-close after 2.5 sec
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-xl max-w-4xl w-[90%] flex flex-col md:flex-row relative overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-4 text-gray-700 hover:text-black text-3xl font-bold z-10"
            >
              ×
            </button>

            {/* Left Yellow Section */}
            <div className="relative bg-yellow-300 w-full md:w-2/5 flex items-center justify-center p-6">
              <img
                src="https://www.intersmartsolution.com/wp-content/uploads/2025/04/initialPop-1-1_11zon.png"
                alt="Business"
                className="max-h-[1000px] object-contain"
              />

              {/* Animated Triangle */}
              <motion.div
                className="absolute top-6 right-[-10px] border-l-[15px] border-r-[15px] border-b-[20px] border-l-transparent border-r-transparent border-b-yellow-400"
                animate={{
                  y: [0, -10, 0], // move up and down
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>

              {/* Circle Animation */}
              <motion.div
                className="absolute bottom-6 right-6 w-5 h-5 border-2 border-white rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-3/5 p-8">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-900 leading-snug">
                Ready To Take Your Business To The{" "}
                <span className="text-yellow-500">Next Level?</span>
              </h2>
              <p className="text-pink-500 text-lg mb-2 font-semibold">
                7,839,684 leads & counting.
              </p>
              <div className="w-16 h-[3px] bg-yellow-500 mb-3"></div>
              <p className="text-gray-700 mb-5">
                Fill out & <strong>Get a Call Back in 30 Minutes</strong>
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center border-b-2 border-gray-700 pb-2">
                    <img
                      src="https://www.intersmartsolution.com/wp-content/uploads/2023/11/India.png"
                      alt="India"
                      className="w-6 h-4 mr-2"
                    />
                    <input
                      type="tel"
                      placeholder="PHONE*"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full outline-none text-lg"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full border-2 border-purple-500 text-purple-600 py-3 rounded-md hover:bg-purple-600 hover:text-white transition font-semibold"
                  >
                    SUBMIT
                  </button>
                </form>
              ) : (
                <p className="text-lg text-green-600 font-semibold mt-6">
                  ✅ Thanks for contacting us! We will reach you soon.
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollPopup;

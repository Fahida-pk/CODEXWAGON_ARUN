import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";

const ScrollPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

  const validatePhone = () => {
    const digits = (phone || "").replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 15) {
      setError("Please enter a valid phone number.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhone()) return;

    setLoading(true);
    setError("");

    const cleanPhone = phone.replace(/\D/g, "");

    try {
      await emailjs.send(
        "service_ppa5zul",
        "template_pg5cnp7",
        {
          name: "Popup Lead",
          email: "lead@codexwagon.in",
          phone: cleanPhone,
          message: `Scroll popup lead. Phone: ${cleanPhone}`,
        },
        "i5dWSfgCJ9Cv1ejPs"
      );

      setSubmitted(true);
      setTimeout(() => setShowPopup(false), 2500);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
            className="bg-white rounded-lg shadow-2xl max-w-4xl w-[90%] flex relative overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-5 right-4 text-gray-700 hover:text-black text-3xl font-bold z-10"
            >
              ×
            </button>

            {/* LEFT IMAGE + SHAPES */}
            <div className="relative bg-yellow-300 flex items-end justify-center overflow-hidden w-1/3">
              {/* Floating Circle */}
              <motion.div
                className="absolute top-10 left-10 w-10 h-10 bg-white rounded-full"
                animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-10 right-10 w-6 h-6 bg-purple-500 rounded-full"
                animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Outline Triangles */}
              <motion.div
                className="absolute top-20 right-12 w-0 h-0 
                           border-l-[18px] border-r-[18px] border-b-[32px] 
                           border-l-transparent border-r-transparent border-b-transparent relative"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div
                  className="absolute top-0 left-0 
                             border-l-[18px] border-r-[18px] border-b-[32px] 
                             border-l-transparent border-r-transparent border-b-white"
                />
              </motion.div>

              <motion.div
                className="absolute bottom-20 left-12 w-0 h-0 
                           border-l-[22px] border-r-[22px] border-b-[38px] 
                           border-l-transparent border-r-transparent border-b-transparent relative"
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <div
                  className="absolute top-0 left-0 
                             border-l-[22px] border-r-[22px] border-b-[38px] 
                             border-l-transparent border-r-transparent border-b-purple-500"
                />
              </motion.div>

              {/* Person Image */}
              <img
                src="https://www.intersmartsolution.com/wp-content/uploads/2025/04/initialPop-1-1_11zon.png"
                alt="Business"
                className="inline-block align-middle w-[330px] h-[520px] object-contain object-bottom relative z-10"
              />
            </div>

            {/* RIGHT FORM + EXTRA SHAPES */}
            <div className="w-2/3 p-8 bg-white relative flex flex-col justify-center">
              {/* RIGHT DECORATIVE SHAPES */}
              <motion.div
  className="absolute top-10 right-10 w-8 h-8 border-2 border-purple-500 rounded-full"
  animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
  transition={{ duration: 6, repeat: Infinity }}
/>

              <motion.div
                className="absolute bottom-10 right-20 w-12 h-12 bg-yellow-400 rounded-full"
                animate={{ y: [0, 25, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-1/2 right-5 w-0 h-0 
                           border-l-[18px] border-r-[18px] border-b-[32px] 
                           border-l-transparent border-r-transparent border-b-purple-500"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />

              {/* FORM CONTENT */}
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black leading-snug">
                Ready To Take Your Business To The{" "}
                <span className="text-yellow-500">Next Level?</span>
              </h2>

              <p className="text-pink-600 text-lg mb-2 font-bold">
                7,839,684 leads & counting.
              </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="15"
                viewBox="0 0 100 10"
                className="mb-4"
              >
                <path
                  d="M0,5 Q50,15 100,5"
                  stroke="#FFD200"
                  strokeWidth="3"
                  fill="transparent"
                />
              </svg>

              <p className="text-gray-700 mb-5">
                Fill out & <strong>Get a Call Back in 30 Minutes</strong>
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="w-[350px]">
                    <div className="border-b-2 border-black focus-within:border-yellow-500">
                      <PhoneInput
                        country={"in"}
                        value={phone}
                        onChange={(value) => setPhone(value)}
                        inputProps={{ required: true }}
                        inputClass="!w-full !text-lg !border-0 !rounded-none !outline-none"
                        buttonClass="!border-0 !bg-transparent"
                        countryCodeEditable={false}
                        enableSearch={true}
                        dropdownStyle={{
                          maxHeight: "200px",
                          overflowY: "auto",
                          zIndex: 9999,
                        }}
                      />
                    </div>
                  </div>

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="px-10 py-2 border-2 border-purple-500 text-purple-600 rounded-md hover:bg-purple-600 hover:text-white transition font-semibold disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "SUBMIT"}
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

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Steps Data
const steps = [
  { icon: "📋", title: "Requirement Analysis", description: "We understand your business needs and goals to create a strong foundation." },
  { icon: "🎨", title: "UI/UX Design", description: "Crafting intuitive and visually appealing designs for an engaging user experience." },
  { icon: "💻", title: "Development", description: "Building scalable solutions using the latest technologies." },
  { icon: "🛡️", title: "Testing & QA", description: "Ensuring quality and reliability through rigorous testing." },
  { icon: "🚀", title: "Deployment", description: "Seamless deployment and launch of your product." },
  { icon: "✔️", title: "Maintenance", description: "Ongoing support and updates to keep your solution running smoothly." },
];

// Why Choose Us Data
const whyChooseUs = [
  { icon: "⚡", title: "Fast Delivery", description: "We ensure on-time delivery without compromising quality." },
  { icon: "💡", title: "Innovative Solutions", description: "We bring creative and modern solutions for your needs." },
  { icon: "🤝", title: "Dedicated Support", description: "24/7 dedicated team to assist you anytime." },
  { icon: "🔒", title: "Security", description: "Top-notch security measures for your projects." },
  { icon: "🌍", title: "Global Experience", description: "Serving clients across multiple countries." },
  { icon: "📈", title: "Scalable Solutions", description: "Solutions designed to grow with your business." },
];

const HowWeWork = () => {
  const { ref: workRef, inView: workInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: chooseRef, inView: chooseInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="bg-gray-50">
      {/* How We Work Section */}
      <section className="py-12">
        <div ref={workRef} className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={workInView ? { opacity: 1, y: 0, scale: 1.1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-black"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={workInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-gray-600 mt-2 text-lg"
          >
            Our streamlined process ensures efficient delivery and quality at every step.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 px-6"
          initial={{ opacity: 0 }}
          animate={workInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center bg-white shadow-md p-6 rounded-xl min-h-[420px] w-[250px] mx-auto flex flex-col justify-center cursor-pointer transition-all"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2563eb";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#fff";
                e.currentTarget.style.color = "#000";
              }}
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-white">
        <div ref={chooseRef} className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={chooseInView ? { opacity: 1, y: 0, scale: 1.1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-black"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={chooseInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-gray-600 mt-2 text-lg"
          >
            We provide reliable and innovative solutions for your business growth.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 px-6"
          initial={{ opacity: 0 }}
          animate={chooseInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              className="text-center bg-gray-50 shadow-md p-6 rounded-xl min-h-[420px] w-[250px] mx-auto flex flex-col justify-center cursor-pointer transition-all"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#e0f2fe"; // Light Blue
                e.currentTarget.style.color = "#000"; // Keep text black
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f9fafb"; // Original light gray
                e.currentTarget.style.color = "#000";
              }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default HowWeWork;

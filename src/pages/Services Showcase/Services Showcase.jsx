import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Steps export default function OurApproach() {
  export default function HowWeWork() {
return (
    <>
   {/* Why Choose Us Section */}
<section className="benefits-section">
  <div className="container">
    <h2 className="section-title">Why Choose Us</h2>
    <p className="section-subtitle">
      Want to take your business to next level that drives conversion & ROI. 
      Join the top web designing company in INDIA for a remarkable Digital Experience.
    </p>

    <div className="benefits">
      {[
        {
          img: "https://www.intersmartsolution.com/wp-content/uploads/2023/11/why1.svg",
          title: "Quality Solutions",
          desc: "From laying out an intuitive foundation to building versatile platforms, our designers and developers collaborate to give you the website that can get you ahead of the competition.",
        },
        {
          img: "https://www.intersmartsolution.com/wp-content/uploads/2023/11/why2.svg",
          title: "Customized Solutions",
          desc: "We will design and develop your website according to your exact business needs, producing a lead generating platform that will build your brand’s presence.",
        },
        {
          img: "https://www.intersmartsolution.com/wp-content/uploads/2023/11/why3.svg",
          title: "Latest Technology",
          desc: "Our designers and developers deploy the latest industry technologies for developing websites. We combine great ideas with powerful technologies to produce desired results.",
        },
        {
          img: "https://www.intersmartsolution.com/wp-content/uploads/2023/11/why4.svg",
          title: "Our Package Included",
          desc: "Free SSL Certification, SEO friendly Sites, Responsive Design, 1 year hosting & Domain Registration",
        },
        {
          img: "https://www.intersmartsolution.com/wp-content/uploads/2023/11/why5.svg",
          title: "Advanced Security & Scalability",
          desc: "We build every website with an eye on the future so your website is fully scalable and always up to date with security parameters.",
        },
        {
          img: "https://www.intersmartsolution.com/wp-content/uploads/2023/11/why6.svg",
          title: "High Performance & Speed",
          desc: "Optimising on-page elements and covering the basic off-page activities will ensure that you have a high-performing and fast website.",
        },
      ].map((item, idx) => (
        <motion.div
          key={idx}
          className="benefit"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
        >
          <img src={item.img} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


    </>
  );
  }
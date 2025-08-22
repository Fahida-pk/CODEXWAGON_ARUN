import React from "react";
import "./IdeasSection.css";

const IdeasSection = () => {
  return (
    <section className="ideas-section">
      <div className="left-content">
        <div className="yellow-bar"></div>
        <div className="text-block">
          <h4>Let's Talk</h4>
          <h2>IDEAS</h2>
          <p>KERALA’S LEADING WEB DESIGN AGENCY JUST GOT BETTER</p>
        </div>
      </div>

      <div className="right-content">
        <h2>
          Step into the <span>Digital Transformation with CodexWagon</span>
        </h2>
        <p>
          In today’s fast-moving digital era, digitization is no longer a choice
          — it’s a survival kit. Businesses and industries must remain agile and
          adaptive to stay competitive. At CodexWagon, we craft websites and
          applications that not only represent your brand but also help you stay
          ahead of the curve.
        </p>

        <p>
          Using the latest technologies and frameworks, we deliver scalable,
          secure, and future-ready digital solutions tailored to your business
          needs. With a solid contingency plan at every stage, we ensure
          projects are delivered on time and within budget — making cost
          overruns a thing of the past.
        </p>

        <h3>Our Expertise</h3>
        <div className="expertise-list">
          <p><strong>Web Development in Kerala</strong> – Custom websites designed for performance and growth.</p>
          <p><strong>Mobile Development in Kerala</strong> – Powerful Android & iOS apps for seamless user experience.</p>
          <p><strong>Cloud Services in Kerala</strong> – Scalable and secure cloud solutions for modern businesses.</p>
          <p><strong>AI Services in Kerala</strong> – Smart, AI-powered applications that give your brand a competitive edge.</p>
        </div>

        <p>
          With our proven expertise, we don’t just follow trends — we create
          them. Partner with CodexWagon to unlock your digital potential and
          transform your ideas into impactful solutions.
        </p>
      </div>
    </section>
  );
};

export default IdeasSection;

import React from "react";
import "./IdeasSection.css";

const IdeasSection = () => {
  return (
    <section className="ideas-section">
      {/* LEFT SIDE */}
      <div className="left-content">
        <div className="yellow-bar"></div>
        <div className="text-block">
          <h4>Let's Talk</h4>
          <h2>IDEAS</h2>
          <p>KERALA’S LEADING WEB DESIGN AGENCY JUST GOT BETTER</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-content">
        <h2>
          Step into the <span>Digital Transformation</span>
        </h2>
        <p>
          Digitization is the survival kit for businesses and industries are forced to
          be agile and adaptive. At CodexWagon, we believe in building websites that
          truly represent your brand and help you stay ahead of the game. We use the
          latest technology and software to deliver scalable and future-ready
          solutions that work.
        </p>

        <p>
          With a contingency plan in place at every stage of the project, we make
          certain that budget overruns are a thing of the past. Our extensive
          experience in web development enables us to expertly evaluate and revamp
          websites, optimizing resources for maximum impact.
        </p>

        <h3>Our Expertise</h3>
        <div className="expertise-list">
          <p><strong>Web Development</strong> – Custom websites designed for performance and growth.</p>
          <p><strong>Mobile Development</strong> – Powerful Android & iOS apps for seamless UX.</p>
          <p><strong>Cloud Services</strong> – Scalable, secure, and modern business solutions.</p>
          <p><strong>AI Services</strong> – Smart, AI-powered applications that boost competitiveness.</p>
        </div>

        <p>
          With our proven expertise, we don’t just follow trends — we create them.
          Partner with CodexWagon to unlock your digital potential and transform your
          ideas into impactful solutions.
        </p>
      </div>
    </section>
  );
};

export default IdeasSection;

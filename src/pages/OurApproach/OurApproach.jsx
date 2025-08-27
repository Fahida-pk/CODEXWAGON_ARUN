import React from "react";
import Navigation from "../../components/Navigation/Navbar.jsx";
import "./OurApproach.css";

export default function OurApproach() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="our-approach-hero">
        <div className="hero-container">
          <div className="hero-text">
            <div className="our-approach-heading">
              <span className="our">OUR </span>
              <span className="approach">
                <strong>APPROACH</strong>
              </span>
            </div>
            <p className="our-approach-subtitle">
              TURNING VISION INTO REALITY: OUR CLIENT-FIRST PROCESS FOR IMPACTFUL SOLUTIONS
            </p>
          </div>
          <div className="hero-illustration">
            <img src="/images/svg.png" alt="Hero" width={480} height={480} />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Want to take your business to next level that drives conversion & ROI. 
            Join the top web designing company in INDIA for a remarkable Digital Experience.
          </p>

          <div className="benefits">
            {/* 1 */}
            <div className="benefit">
              <img src="https://www.intersmartsolution.com/wp-content/uploads/2023/11/why1.svg" alt="Quality Solutions" />
              <h3>Quality Solutions</h3>
              <p>
                From laying out an intuitive foundation to building versatile platforms,
                our designers and developers collaborate to give you the website that
                can get you ahead of the competition.
              </p>
            </div>

            {/* 2 */}
            <div className="benefit">
              <img src="https://www.intersmartsolution.com/wp-content/uploads/2023/11/why2.svg" alt="Customized Solutions" />
              <h3>Customized Solutions</h3>
              <p>
                We will design and develop your website according to your exact business
                needs, producing a lead generating platform that will build your brand’s presence.
              </p>
            </div>

            {/* 3 */}
            <div className="benefit">
              <img src="https://www.intersmartsolution.com/wp-content/uploads/2023/11/why3.svg" alt="Latest Technology" />
              <h3>Latest Technology</h3>
              <p>
                Our designers and developers deploy the latest industry technologies for
                developing websites. We combine great ideas with powerful technologies 
                to produce desired results.
              </p>
            </div>

            {/* 4 */}
            <div className="benefit">
              <img src="https://www.intersmartsolution.com/wp-content/uploads/2023/11/why4.svg" alt="Package" />
              <h3>Our Package Included</h3>
              <p>
                Free SSL Certification <br />
                SEO friendly Sites <br />
                Responsive Design <br />
                1 year hosting & Domain Registration
              </p>
            </div>

            {/* 5 */}
            <div className="benefit">
              <img src="https://www.intersmartsolution.com/wp-content/uploads/2023/11/why5.svg" alt="Security" />
              <h3>Advanced Security & Scalability</h3>
              <p>
                We build every website with an eye on the future so your website is fully 
                scalable and is always up to date with security parameters.
              </p>
            </div>

            {/* 6 */}
            <div className="benefit">
              <img src="https://www.intersmartsolution.com/wp-content/uploads/2023/11/why6.svg" alt="Performance" />
              <h3>High Performance & Speed</h3>
              <p>
                Optimising all the on page elements and covering the basic off page activities 
                will ensure that you have a high-performing and fast website.
              </p>
            </div>
          </div>
        </div>
      </section>
    {/* How We Work Section */}
{/* How We Work Section */}
<section className="work-section">
  <div className="container">
    <h2 className="section-title">How We Work</h2>
    <p className="section-subtitle">
      Our streamlined process ensures efficient delivery and quality at every step.
    </p>

    <div className="work-grid">
      {/* 1 */}
      <div className="work-card">
        <img src="https://cdn-icons-png.flaticon.com/512/10279/10279604.png" alt="Requirement Analysis" />
        <h3>Requirement Analysis</h3>
        <p>We understand your business needs and goals to create a strong foundation. Our team thoroughly analyzes requirements, identifies potential challenges, and documents every detail.</p>
      </div>

      {/* 2 */}
      <div className="work-card">
        <img src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png" alt="UI/UX Design" />
        <h3>UI/UX Design</h3>
        <p>We craft intuitive and visually appealing designs that deliver an engaging user experience. Our designs balance creativity and functionality.</p>
      </div>

      {/* 3 */}
      <div className="work-card">
        <img src="https://cdn-icons-png.flaticon.com/512/2721/2721292.png" alt="Development" />
        <h3>Development</h3>
        <p>Our developers build with modern frameworks and coding standards to deliver scalable, reliable, and future-ready digital solutions.</p>
      </div>

      {/* 4 */}
      <div className="work-card">
        <img src="https://cdn-icons-png.flaticon.com/512/868/868786.png" alt="Testing & QA" />
        <h3>Testing & QA</h3>
        <p>Our QA team ensures bug-free, secure, and high-performance products through manual and automated testing.</p>
      </div>

      {/* 5 */}
      <div className="work-card">
        <img src="https://cdn-icons-png.flaticon.com/512/2920/2920340.png" alt="Deployment" />
        <h3>Deployment</h3>
        <p>We launch your product seamlessly with zero downtime, ensuring security and scalability for real-world use.</p>
      </div>

      {/* 6 */}
      <div className="work-card">
        <img src="https://cdn-icons-png.flaticon.com/512/11211/11211676.png" alt="Maintenance" />
        <h3>Maintenance</h3>
        <p>We provide continuous monitoring, updates, and proactive maintenance to keep your solution secure and optimized.</p>
      </div>
    </div>
  </div>
</section>



    </>
  );
}

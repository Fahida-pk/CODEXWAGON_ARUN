import React from "react";
import "./ContactForm.css"; // styles from earlier css

const ContactForm = () => {
  return (
    <section className="contact-section">
      {/* Left Side */}
      <div className="contact-left">
        <div className="logo-text">
          <span className="big-d">D</span>
          <div className="ddd-text">
            <div>DESIGN</div>
            <div>DEVELOP</div>
            <div>DELIVER</div>
          </div>
          <span className="smart">SMART</span>
        </div>

        <div className="info">
          <img src="/images/mail-icon.png" alt="mail" width="22" />
          <span>sales@codexwagon.in</span>
        </div>
        <div className="info">
          <img src="/images/phone1-icon.png" alt="phone" width="22" />
          <span>+91 9645230861</span>
        </div>

        
        
      </div>

      {/* Right Side */}
      <div className="contact-right">
        <h2>LET'S GET STARTED NOW!</h2>
        <form className="contact-form">
          <input type="text" placeholder="NAME*" required />
          <input type="text" placeholder="PHONE*" required />
          <input type="email" placeholder="EMAIL*" required />
          <select required>
            <option value="">SELECT A SERVICE</option>
            <option>Web Development</option>
            <option>Digital Marketing</option>
            <option>Branding</option>
            <option>SEO</option>
          </select>
          <textarea placeholder="HOW CAN WE HELP YOU?" rows="3"></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

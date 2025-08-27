import React, { useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.", { position: "top-center" });
      return;
    }

    try {
      const apiBase = import.meta.env.VITE_API_BASE || "";
      const response = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
        toast.success("Thanks for contacting us! We will be in touch shortly.", { position: "top-center" });
      } else {
        toast.error(data.message || "Something went wrong!", { position: "top-center" });
      }
    } catch (err) {
      console.error(err);
      toast.error("Error sending form. Try again later.", { position: "top-center" });
    }
  };

  return (
    <section className="contact-section">
      {/* Left Column */}
      <div className="left-column">
        <div className="logo-info-box">
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
  <a href="mailto:achithran@gmail.com">achithran@gmail.com</a>
</div>

<div className="info">
  <img src="/images/phone1-icon.png" alt="phone" width="22" />
  <a href="tel:+919961959788">+91 99619 59788</a>
</div>

        </div>

        {/* Floating Cup */}
        <div className="cup-box">
          <img
            src="https://www.intersmartsolution.com/wp-content/themes/intersmart/assets/images/cup.png"
            alt="Cup"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column">
        <h2>LET'S GET STARTED NOW!</h2>

        {!success ? (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="NAME*"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <PhoneInput
              country={"in"}
              value={formData.phone}
              onChange={(phone) => setFormData({ ...formData, phone })}
              inputClass="phone-input"
              buttonClass="phone-flag-dropdown"
              dropdownClass="phone-dropdown"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="EMAIL*"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">SELECT A SERVICE</option>
              <option>Web Development</option>
              <option>Digital Marketing</option>
              <option>Branding</option>
              <option>SEO</option>
            </select>

            <textarea
              name="message"
              placeholder="HOW CAN WE HELP YOU?"
              rows="3"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">SUBMIT</button>
          </form>
        ) : (
          <div className="success-box">
            <h2>Thanks for contacting us!</h2>
            <p>We will be in touch with you shortly.</p>
          </div>
        )}
      </div>

   
    </section>
  );
};

export default ContactForm;

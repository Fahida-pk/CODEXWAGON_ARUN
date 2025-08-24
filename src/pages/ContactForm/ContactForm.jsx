import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    try {
      const apiBase = import.meta.env.VITE_API_BASE || "";
      const response = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Thanks for contacting us! We will be in touch with you shortly.", { position: "top-right" });
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong!", { position: "top-right" });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error sending form. Try again later.", { position: "top-right" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
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

      <div className="contact-right">
        <h2>LET'S GET STARTED NOW!</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="NAME*" value={formData.name} onChange={handleChange} required />
          <input type="text" name="phone" placeholder="PHONE*" value={formData.phone} onChange={handleChange} required />
          <input type="email" name="email" placeholder="EMAIL*" value={formData.email} onChange={handleChange} required />
          <select name="service" value={formData.service} onChange={handleChange} required>
            <option value="">SELECT A SERVICE</option>
            <option>Web Development</option>
            <option>Digital Marketing</option>
            <option>Branding</option>
            <option>SEO</option>
          </select>
          <textarea name="message" placeholder="HOW CAN WE HELP YOU?" rows="3" value={formData.message} onChange={handleChange}></textarea>
          <button type="submit" disabled={loading}>
            {loading ? "SENDING..." : "SUBMIT"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactForm;

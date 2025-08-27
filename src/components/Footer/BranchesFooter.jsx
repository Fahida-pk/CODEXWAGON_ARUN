import React from "react";
import "./BranchesFooter.css";
import indiaFlag from "../../assets/styles/flags/india.png";

export default function BranchesFooter() {
  return (
    <div className="branches-footer">
      <div className="branches-container">
        
        {/* Left Section */}
        <div className="branches-left">
          <h2 className="branches-title">Our Branch</h2>
          <div className="branch-item">
            <img src={indiaFlag} alt="India Flag" className="branch-flag" />
            <div>
              <h3 className="branch-country blue">INDIA</h3>
              <p className="branch-address">
                2nd Floor, Perinthalmana Bypass, Kerala
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="branches-right">
          <h2 className="branches-contact-title">Talk to our expert today</h2>
          <div className="contact-box">
            <span className="contact-icon">📧</span>
            <a href="mailto:achithran@gmail.com" className="contact-link">
              achithran@gmail.com
            </a>
          </div>
          <div className="contact-box">
            <span className="contact-icon">📱</span>
            <a href="tel:+91 99619 59788" className="contact-link">
              +91 99619 59788
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

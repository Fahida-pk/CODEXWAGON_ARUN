import React from 'react';
import { Link } from 'react-router-dom';
import BranchesFooter from "./BranchesFooter";
import './Footer.css';

export default function Footer() {
  return (
    <>
      {/* Branches Section */}
      <BranchesFooter />

      {/* Main Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Quick Links */}
          <div className="footer-column">
            <h5>Quick Links</h5>
            <ul>
              {['Home','About Us','Our Work','Careers','Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.replace(/\s+/g, '').toLowerCase()}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h5>Our Services</h5>
            <ul>
              {[
                'Web Designing & Development',
                'SEO Services',
                'AI Services',
                'Cloud Computing',
                'Mobile App Development'
                
              ].map(service => (
                <li key={service}>
                  <Link to={`/services/${service.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`}>{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h5>Contact Us</h5>
            <p>
              📧<a href="mailto:achithran@gmail.com" className="contact-link">
              achithran@gmail.com
            </a>
            </p>
            <p>☎  <a href="tel:+919961959788">+91 99619 59788</a></p>
            <h5 className="mt">Follow Us</h5>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          {/* Profiles */}
          <div className="footer-column">
            <h5>Our Business Profiles</h5>
            <ul>
              {['Behance','Glassdoor','Clutch'].map(profile => (
                <li key={profile}>
                  <a href="#">{profile}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Codexwagon Solution PVT LTD. All Rights Reserved</p>
          <div className="bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

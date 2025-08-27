import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MegaMenu from "../MegaMenu/MegaMenu.jsx";
import "./Navbar.css";

export default function Navigation() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  // ✅ Scroll behavior for hiding/showing navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setHidden(true);
        setScrolled(false);
      } else if (currentScroll < lastScroll && currentScroll > 80) {
        setHidden(false);
        setScrolled(true);
      } else if (currentScroll <= 80) {
        setHidden(false);
        setScrolled(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // ✅ Navbar links
  const links = [
    { id: "ourstory", label: "Our Story", path: "/ourstory" },
    { id: "services", label: "Our Services", path: "#" },
    { id: "ourapproach", label: "Our Approach", path: "/our-approach" },
    { id: "career", label: "Careers", path: "/career" }, // 🔑 lowercase path
    { id: "navcontact", label: "Contact", path: "/contact" },
  ];

  // ✅ Handle navigation
  const handleNavClick = (link) => {
    setMenuOpen(false);

    if (link.id === "services") {
      setShowMegaMenu(!showMegaMenu);
    } else {
      navigate(link.path);
    }
  };

  return (
    <>
      <header
        className={`navbar ${hidden ? "hidden" : ""} ${scrolled ? "scrolled" : ""} ${
          isHome ? "home" : "inner"
        } ${showMegaMenu ? "mega-open" : ""}`}
      >
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/" className="brand">
            CODEXWAGON
          </Link>
        </div>

        {/* Links */}
        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link.id}>
              {link.id === "services" ? (
                <button
                  className="mega-menu-btn"
                  onClick={() => setShowMegaMenu(!showMegaMenu)}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => handleNavClick(link)} // ❌ removed preventDefault
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <div
          className={`navbar-menu ${menuOpen ? "active" : ""}`}
          onClick={() => {
  setMenuOpen(!menuOpen);
  setShowMegaMenu(!showMegaMenu);
}}

        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Mega Menu */}
      {showMegaMenu && <MegaMenu onClose={() => setShowMegaMenu(false)} />}
    </>
  );
}

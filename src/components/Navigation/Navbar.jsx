import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MegaMenu from "../MegaMenu/MegaMenu.jsx";
import "./Navbar.css";

export default function Navigation() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  // Scroll behavior for navbar
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

  const links = [
    { id: "ourstory", label: "Our Story", path: "/ourstory" },
    { id: "services", label: "Our Services", path: "#" },
    { id: "Our Approach", label: "Our Approach", path: "/ServiceShowcase" },
    { id: "careers", label: "Careers", path: "/careers" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`navbar ${hidden ? "hidden" : ""} ${scrolled ? "scrolled" : ""} ${
          isHome ? "home" : "inner"
        } ${showMegaMenu ? "mega-open" : ""}`}
      >
        <div className="navbar-logo">
          <Link to="/" className="brand">
            CODEXWAGON
          </Link>
        </div>

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
                  className={location.pathname === link.path ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div
          className={`navbar-menu ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* ✅ Mega Menu Component */}
      {showMegaMenu && <MegaMenu onClose={() => setShowMegaMenu(false)} />}
    </>
  );
}

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { dellLogo, rightLogo } from "../assets/images";
import AppImage from "./common/AppImage";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setScrolled(window.scrollY > heroHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`navbar 
        ${scrolled ? "navbar-scrolled" : ""} 
        ${menuOpen ? "navbar-menu-open" : ""}
      `}
    >
      {/* Left Logo */}
      <div className="nav-logo">
        <AppImage src={dellLogo} alt="Dell Technologies" />
      </div>

      {/* Desktop Navigation */}
      <nav className="nav-links">
        <a href="#ai">AI Experience</a>
        <a href="#features">Features</a>
        <a href="#products">Explore</a>
      </nav>

      {/* Right Section */}
      <div className="nav-actions">

        {/* Right Logo */}
        <div className="nav-right-logo">
          <AppImage
            src={rightLogo}
            alt="Dell"
          />
        </div>

        {/* Hamburger Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <nav
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <a href="#features" onClick={closeMenu}>
          <span>01</span>
          Features
        </a>

        <a href="#ai" onClick={closeMenu}>
          <span>02</span>
          AI Experience
        </a>

        <a href="#products" onClick={closeMenu}>
          <span>03</span>
          Explore
        </a>
      </nav>

    </header>
  );
}

export default Navbar;

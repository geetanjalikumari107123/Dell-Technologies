import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { dellLogo, rightLogo } from "../assets/images";
import AppImage from "./common/AppImage";
import "./Navbar.css";

const navigationItems = [
  {
    id: "ai",
    label: "AI Experience",
  },
  {
    id: "features",
    label: "Features",
  },
  {
    id: "products",
    label: "Explore",
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;

      setScrolled(window.scrollY > heroHeight - 100);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((previousState) => !previousState);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      {/* Left Logo */}
      <div className="nav-logo">
        <AppImage
          src={dellLogo}
          alt="Dell Technologies"
        />
      </div>

      {/* Desktop Navigation */}
      <nav
        className="nav-links"
        aria-label="Primary navigation"
      >
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Right Section */}
      <div className="nav-actions">
        <div className="nav-right-logo">
          <AppImage
            src={rightLogo}
            alt="Dell"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="mobile-navigation"
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
        aria-label="Mobile navigation"
      >
        {navigationItems.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={closeMenu}
          >
            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
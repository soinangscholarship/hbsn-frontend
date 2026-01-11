import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import "./NavBar.css";
import hbsnLogo from "../../../assets/hbsn-logo.jpg";
import LanguageSwitcher from "../../common/LanguageSwitcher/LanguageSwitcher";

const NavBar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { to: "/home", label: t('navbar.home') },
    { to: "/about", label: t('navbar.about') },
    { to: "/scholarship", label: t('navbar.scholarship') },
    { to: "/activities", label: t('navbar.activities') },
    { to: "/organization", label: t('navbar.organization') },
    { to: "/souvenir", label: t('navbar.souvenir') },
    { to: "/contact", label: t('navbar.contact') },
  ];

  return (
    <>
      {/* Top navbar */}
      <nav className="navbar-top">
        <div className="navbar-logo-group">
          <Link to="/home">
            <img src={hbsnLogo} alt="HBSN Logo" className="navbar-logo" />
          </Link>
          <span className="navbar-brand">
            <span className="brand-highlight">Sợi Nắng</span>
          </span>
        </div>
        <div className="navbar-right">
          <LanguageSwitcher />
          <button
            className={`navbar-hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </nav>

      {/* Navigation menu */}
      <nav className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar-links">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`navbar-link${location.pathname === link.to ? " active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default NavBar;

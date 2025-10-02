import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";
import {
  FaGraduationCap,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaYoutube,
  FaComments,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo và thông tin cơ bản */}
        <div className="footer-brand">
          <div className="footer-logo-section">
            <FaGraduationCap className="footer-logo-icon" />
            <div className="footer-brand-text">
              <h3>{t('footer.brand.title')}</h3>
              <p>{t('footer.brand.subtitle')}</p>
            </div>
          </div>
          <p className="footer-description">
            {t('footer.brand.description')}
          </p>
        </div>

        {/* Thông tin liên lạc */}
        <div className="footer-contact">
          <h4>{t('footer.contact.title')}</h4>
          <div className="contact-items">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>{t('footer.contact.phone')}</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>{t('footer.contact.email')}</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>{t('footer.contact.address')}</span>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4>{t('footer.social.title')}</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/HocBongSoiNang" className="social-link facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="social-link youtube">
              <FaYoutube />
            </a>
            <a href="#" className="social-link comments">
              <FaComments />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>{t('footer.bottom.copyright')}</p>
          <div className="footer-links">
            <a href="#">{t('footer.bottom.privacy')}</a>
            <a href="#">{t('footer.bottom.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

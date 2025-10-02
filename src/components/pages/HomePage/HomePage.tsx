import React from "react";
import { useTranslation } from "react-i18next";
import "./HomePage.css";
import ImageSlider from "../../organism/ImageSlider/ImageSlider";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">
            <span className="hero-highlight">{t('hero.title')}</span>
          </h2>
          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">{t('hero.learnMore')}</button>
            <button className="btn-secondary">{t('hero.applyNow')}</button>
          </div>
        </div>
        <div className="hero-slider">
          <ImageSlider />
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-header">
            <h2 className="mission-title">{t('mission.title')}</h2>
            <div className="mission-divider"></div>
          </div>
          <div className="mission-content">
            <p className="mission-text">
              {t('mission.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="features-title">{t('features.title')}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>{t('features.financialSupport.title')}</h3>
              <p>{t('features.financialSupport.description')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>{t('features.mentorship.title')}</h3>
              <p>{t('features.mentorship.description')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>{t('features.holisticGrowth.title')}</h3>
              <p>{t('features.holisticGrowth.description')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

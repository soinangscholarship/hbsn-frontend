import React from "react";
import { useTranslation } from "react-i18next";
import "./ScholarshipPage.css";
import ImageSlider from "../../organism/ImageSlider/ImageSlider";
import AnimatedSun from "../../organism/AnimatedSun/AnimatedSun";
import { useLazyLoad } from "../../../hooks/useLazyLoad";
import "../../../styles/LazyLoadAnimations.css";

const ScholarshipPage: React.FC = () => {
  const { t } = useTranslation();
  
  // Lazy load hooks for different sections
  const heroRef = useLazyLoad({ animationType: 'fadeIn', delay: 200 });
  const missionRef = useLazyLoad({ animationType: 'slideUp', delay: 100 });
  const featuresRef = useLazyLoad({ animationType: 'fadeIn', delay: 0 });
  const featureCard1Ref = useLazyLoad({ animationType: 'slideLeft', delay: 200 });
  const featureCard2Ref = useLazyLoad({ animationType: 'scale', delay: 400 });
  const featureCard3Ref = useLazyLoad({ animationType: 'slideRight', delay: 600 });

  return (
    <div className="homepage-container">
      {/* Hero Section with Animated Sun */}
      <section className="hero-section">
        <div className="hero-content-wrapper">
          <div className="hero-text">
            <h2 className="hero-title">
              <span className="hero-highlight">{t('hero.title')}</span>
            </h2>
            <p className="hero-subtitle">
              {t('hero.subtitle')}
            </p>
          </div>
          <div className="hero-sun-container">
            <AnimatedSun />
          </div>
        </div>
        <div className={`hero-slider ${heroRef.animationClass}`} ref={heroRef.ref}>
          <ImageSlider />
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className={`mission-container ${missionRef.animationClass}`} ref={missionRef.ref}>
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
        <div className={`features-container ${featuresRef.animationClass}`} ref={featuresRef.ref}>
          <h2 className="features-title">{t('features.title')}</h2>
          <div className="features-grid">
            <div className={`feature-card ${featureCard1Ref.animationClass}`} ref={featureCard1Ref.ref}>
              <div className="feature-icon">🎓</div>
              <h3>{t('features.financialSupport.title')}</h3>
              <p>{t('features.financialSupport.description')}</p>
              <div className="glare"></div>
            </div>
            
            <div className={`feature-card ${featureCard2Ref.animationClass}`} ref={featureCard2Ref.ref}>
              <div className="feature-icon">🤝</div>
              <h3>{t('features.mentorship.title')}</h3>
              <p>{t('features.mentorship.description')}</p>
              <div className="glare"></div>
            </div>
            
            <div className={`feature-card ${featureCard3Ref.animationClass}`} ref={featureCard3Ref.ref}>
              <div className="feature-icon">🌱</div>
              <h3>{t('features.holisticGrowth.title')}</h3>
              <p>{t('features.holisticGrowth.description')}</p>
              <div className="glare"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScholarshipPage;

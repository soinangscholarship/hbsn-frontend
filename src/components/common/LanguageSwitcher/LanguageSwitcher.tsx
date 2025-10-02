import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
        title={t('language.english')}
      >
        EN
      </button>
      <button
        className={`lang-btn ${i18n.language === 'vi' ? 'active' : ''}`}
        onClick={() => changeLanguage('vi')}
        title={t('language.vietnamese')}
      >
        VI
      </button>
    </div>
  );
};

export default LanguageSwitcher;

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./NavBar.css";
import hbsnLogo from "../../../assets/hbsn-logo.jpg";
import LanguageSwitcher from "../../common/LanguageSwitcher/LanguageSwitcher";

const NavBar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="navbar-logo-group">
        <Link to="/">
          <img src={hbsnLogo} alt="HBSN Logo" className="navbar-logo" />
        </Link>
        <span className="navbar-brand">
          <span className="brand-highlight">Sợi Nắng</span> Scholarship
        </span>
        <span className="navbar-brand">-</span>
        <span className="navbar-brand">
          <span className="brand-highlight">Nguyễn Hiền</span> Foundation
        </span>
      </div>
      <div className="navbar-right">
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            {t('navbar.home')}
          </Link>
          <Link to="/about" className="navbar-link">
            {t('navbar.about')}
          </Link>
          <Link to="/activities" className="navbar-link">
            {t('navbar.activities')}
          </Link>
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default NavBar;

import { Link } from "react-router-dom";
import "./NavBar.css";
import hbsnLogo from "../../../assets/hbsn-logo.jpg";

const NavBar: React.FC = () => (
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
    <div className="navbar-links">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/about" className="navbar-link">
        About
      </Link>
      <Link to="/activities" className="navbar-link">
        Activities
      </Link>
    </div>
  </nav>
);

export default NavBar;

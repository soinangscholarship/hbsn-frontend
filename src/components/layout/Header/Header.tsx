import "./Header.css";
import {
  FaGraduationCap,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaYoutube,
  FaComments,
} from "react-icons/fa";

const Header: React.FC = () => (
  <header className="header-bar">
    <div className="header-info">
      <span>
        <FaGraduationCap className="icon-red" />
        Sợi Nắng Family
      </span>
      <span>
        <FaPhone className="icon-red" />
        0123 456 789
      </span>
      <span>
        <FaEnvelope className="icon-red" />
        contact.hbsn@nguyenhienfoundation.org
      </span>
    </div>
    <div className="header-social">
      <a href="https://www.facebook.com/HocBongSoiNang">
        <FaFacebookF />
      </a>
      <a href="#">
        <FaYoutube />
      </a>

      <a href="#">
        <FaComments />
      </a>
    </div>
  </header>
);

export default Header;

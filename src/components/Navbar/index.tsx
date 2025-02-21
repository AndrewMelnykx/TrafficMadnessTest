import { Link } from "react-router-dom";
import "./index.scss";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="nav-bar">
        <Link to="/digits" className="nav-link">
          Цифры
        </Link>
        <Link to="/online-deals" className="nav-link">
          Сделки онлайн
        </Link>
        <Link to="/about" className="nav-link">
          о компании
        </Link>
        <Link to="/" className="nav-link">
          как начать{" "}
        </Link>
        <Link to="/tariffs" className="nav-link">
          тарифы{" "}
        </Link>
        <Link to="/reviews" className="nav-link">
          отзывы{" "}
        </Link>
        <Link to="/faq" className="nav-link">
          FAQ
        </Link>
      </nav>
      <div className="buttons-wrapper">
        <button className="login-btn">ВХОД</button>
        <button className="signup-btn">РЕГИСТРАЦИЯ</button>
      </div>
    </div>
  );
};

export default Navbar;

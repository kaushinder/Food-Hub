import { RES_LOGO} from "../../utils/constants";

// Header component for header section: Logo, Nav Items
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img alt="Food img" className="logo" src={RES_LOGO}></img>
        <span className="logo-text">FoodHub</span>
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-link">
            <span className="nav-icon">🏠</span>
            Home
          </li>
          <li className="nav-link">
            <span className="nav-icon">ℹ️</span>
            About
          </li>
          <li className="nav-link">
            <span className="nav-icon">📞</span>
            Contact
          </li>
          <li className="nav-link cart">
            <span className="nav-icon">🛒</span>
            Cart
            <span className="cart-badge">3</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
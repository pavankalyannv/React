import { IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
      <Link to="/"> <img className="logo" src={IMG_URL} /> </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li> <Link to="/home">  Home </Link></li>
          <li> <Link to="/about" >About Us</Link></li>
          <li> <Link to="/contact" > Contact Us</Link></li>
          <li> <Link to="/cart" >Cart</Link> </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

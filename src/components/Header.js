import { IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineCheck from "../utils/useOnlineCheck";
import { useSelector } from "react-redux";
import store from "../utils/Store";

const Header = () => {
  const onlineStatus = useOnlineCheck();

  //  by selecting particular slice will increase the performance of the app
  const cartItems = useSelector((store) => store.cart.items);

  // The component  will rerender everytime when the store updated, which will drastically decrease the performace
  //  const store = useSelector(store=>store)

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          {" "}
          <img className="logo" src={IMG_URL} />{" "}
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li> User Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            {" "}
            <Link to="/home"> Home </Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/grocery"> Grocery</Link>
          </li>
          <li>
            {" "}
            <Link to="/cart">Cart - {cartItems.length} Items </Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

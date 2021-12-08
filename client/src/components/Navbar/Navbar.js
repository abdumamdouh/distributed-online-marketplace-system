import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { CgShoppingBag } from "react-icons/cg";
import { FaBars } from "react-icons/fa";

// import navbar links from utils
import { navbarLinks } from "../../utils/navbarLinks";

import { withRouter } from "react-router-dom";

// import logo from assets
import logo from "../../assets/images/hogash-logo-black.png";

import { toggleSideCart, toggleSidebar } from "../../redux/actions/sideBar";
import { logoutUserAction } from "../../redux/actions/users";

// navbar styles
import "./Navbar.scss";

const Navbar = (props) => {
  const { cart } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  const handleLogOut = () => {
    console.log("log out");
    //TODO dispatch the action to logout
    dispatch(logoutUserAction());

    const path = "/login";
    props.history.push(path);
  };

  return (
    <header className="site-header">
      {/* bootstrap container class */}
      <div className="container">
        {/* navbar */}
        <nav className="site-header__navbar">
          {/* navbar logo & links */}
          <div className="site-header__navbar-nav">
            <div className="site-header__logo-container">
              {/* navbar logo */}
              <Link to="/">
                <img
                  src={logo}
                  alt="company logo"
                  className="site-header__logo"
                />
              </Link>
            </div>
            {/* navbar links */}
            <ul className="site-header__links">
              {/* map through navbarLinks array */}
              {navbarLinks.map((link) => {
                const { id, text, path } = link;
                return (
                  <li key={id}>
                    <Link to={path} className="site-header__link">
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* navbar login icon & cart icon */}
          <div className="site-header__icons">
            <ul className="site-header__icons-list">
              <li className="site-header__icons-item">
                <Link style={{ color: "#000" }} to="/account">
                  <BiUser className="site-header__icon" />
                </Link>
              </li>
              <li className="site-header__icons-item">
                <CgShoppingBag
                  onClick={() => dispatch(toggleSideCart())}
                  style={{ cursor: "pointer" }}
                />
                <span className="site-header__cart-count">{cartCount}</span>
              </li>
              <li>
                <Link to="/login" className="site-header__link">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/login" className="site-header__link">
                  <span onClick={handleLogOut}>Logout</span>
                </Link>
              </li>
              <li className="site-header__icons-item">
                <FaBars
                  className="site-header__toggle"
                  onClick={() => dispatch(toggleSidebar())}
                />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default withRouter(Navbar);

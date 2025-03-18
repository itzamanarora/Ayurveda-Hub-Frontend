import "./NavBar.css";
import {
  MagnifyingGlass,
  User,
  Heart,
  ShoppingCart,
  PhoneCall,
} from "@phosphor-icons/react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Components/Logo/logo";
import Register from "../../Pages/Auth/Register";
import Mid_Bar_Sale from "./../Mid-bar/Mid_Bar_Sale";

function NavBar() {
  // States for wishlist, cart counts, and search bar visibility
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <>
      {/* <Chatbot /> */}
      <div className="top-nav">
        <PhoneCall size={25} color="#f61313" weight="duotone" />
          <span className="top-heading-call">+91 8958089580</span>
        <span className="vertical-line"></span>
        <span className="top-heading-email">Ayurvedahub@gmail.com</span>
      </div>
      <div className="nav">
        <div className="nav-mid">
          <Link to={"/Ayurveda-Hub-Frontend/"} className="heading">
            <Logo />
          </Link>

          <div className="nav-icons">
            <input
              type="search"
              placeholder="Search..."
              className="search-input"
              id="search-input"
              style={{ visibility: isSearchVisible ? "visible" : "hidden" }}
            ></input>
              <MagnifyingGlass
                size={22}
                color="#3B643A"
                weight="light"
                onClick={() => setIsSearchVisible(!isSearchVisible)}
                style={{ cursor: "pointer" }}
              />
            <Link to={"/Ayurveda-Hub-Frontend/register"}>
              {Register(true)}
              <User size={22} color="#3B643A" weight="light" />
            </Link>

            {/* Wishlist Icon with Count */}
            <div className="icon-container">
              <Link to={"/Ayurveda-Hub-Frontend/wishlist"}>
                <Heart size={22} color="#3B643A" weight="light" />
              </Link>
              <span className="count1">{wishlistCount}</span>
            </div>

            {/* Cart Icon with Count */}
            <div className="icon-container">
              <Link to={"/Ayurveda-Hub-Frontend/cart"}>
                <ShoppingCart size={22} color="#3B643A" weight="light" />
              </Link>
              <span className="count2">{cartCount}</span>
            </div>
          </div>
        </div>

        {/* Navbar Links */}
        <ul className="navbar-ul">
          <li>
            <NavLink
              to={"/Ayurveda-Hub-Frontend/products?category=hair"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Hair
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Ayurveda-Hub-Frontend/products?category=skin"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Skin
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Ayurveda-Hub-Frontend/products?category=health"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Health
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Ayurveda-Hub-Frontend/products"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              All Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Ayurveda-Hub-Frontend/community"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Community
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Ayurveda-Hub-Frontend/about"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Ayurveda-Hub-Frontend/contact"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>
      <Mid_Bar_Sale
        text={
          "Use Code <Strong>FIRST50</Strong> - & get Flat <Strong>50% OFF</Strong> on your first Order!"
        }
      />
    </>
  );
}

export default NavBar;

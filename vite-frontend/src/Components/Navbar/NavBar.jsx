import "./NavBar.css";
import { MagnifyingGlass, User, Heart, ShoppingCart,PhoneCall } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../Components/Logo/logo'

function NavBar() {

  // States for wishlist and cart counts
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <div className="top-nav">
        <PhoneCall size={25} color="#f61313" weight="duotone" />
        <span className="top-heading-call">+91 8958089580</span>
        <span className="vertical-line"></span>
        <span className="top-heading-email">Ayurvedahub@gmail.com</span>
      </div>
      <div className="nav">
        <div className="nav-mid">
          <Link to={'/'} className="heading"><Logo /></Link>

          <div className="nav-icons">
            <MagnifyingGlass size={22} color="#3B643A" weight="light" />
            <Link to={'register'}><User size={22} color="#3B643A" weight="light" /></Link>

            {/* Wishlist Icon with Count */}
            <div className="icon-container">
              <Link to={'wishlist'}><Heart size={22} color="#3B643A" weight="light" /></Link>
              <span className="count">{wishlistCount}</span>
            </div>

            {/* Cart Icon with Count */}
            <div className="icon-container">
              <Link to={'cart'}><ShoppingCart size={22} color="#3B643A" weight="light" /></Link>
              <span className="count">{cartCount}</span>
            </div>
          </div>
        </div>

        {/* Navbar Links */}
        <ul className="navbar-ul">
          <li><Link to={'products'}>Hair</Link></li>
          <li><Link to={'products'}>Skin</Link></li>
          <li><Link to={'products'}>Health</Link></li>
          <li><Link to={'products'}>All Products</Link></li>
          <li><Link to={'community'}>Community</Link></li>
          <li><Link to={'about'}>About us</Link></li>
          <li><Link to={'contact'}>Contact us</Link></li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;

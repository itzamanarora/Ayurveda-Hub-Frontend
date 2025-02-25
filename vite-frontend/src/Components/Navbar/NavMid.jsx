import "./NavBar.css";
import { MagnifyingGlass, User, Heart, ShoppingCart } from "@phosphor-icons/react";
import { useState } from "react";

function NavMid() {
  
  // States for wishlist and cart counts
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <div className="nav">
        <div className="nav-mid">
          <p className="heading">AYURVEDA HUB</p>

          <div className="nav-icons">
            <MagnifyingGlass size={22} color="#3B643A" weight="light" />
            <User size={22} color="#3B643A" weight="light" />

            {/* Wishlist Icon with Count */}
            <div className="icon-container">
              <Heart size={22} color="#3B643A" weight="light" />
              <span className="count">{wishlistCount}</span>
            </div>

            {/* Cart Icon with Count */}
            <div className="icon-container">
              <ShoppingCart size={22} color="#3B643A" weight="light" />
              <span className="count">{cartCount}</span>
            </div>
          </div>
        </div>

        {/* Navbar Links */}
        <ul className="navbar-ul">
          <li><a href="#">Hair</a></li>
          <li><a href="#">Skin</a></li>
          <li><a href="#">Health</a></li>
          <li><a href="#">All Products</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </div>
    </>
  );
}

export default NavMid;

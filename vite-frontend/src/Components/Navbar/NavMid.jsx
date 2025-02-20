import "./NavBar.css";
import { MagnifyingGlass, User, Heart, ShoppingCart } from "@phosphor-icons/react";

function NavMid() {
  return (
    <>
      <div className="nav">
        <div className="nav-mid">
          <p className="heading">AYURVEDA HUB</p>
          <div className="nav-icons">
          <MagnifyingGlass size={20} color="#3B643A" weight="light" />
          <User size={20} color="#3B643A" weight="light" />
          <Heart size={20} color="#3B643A" weight="light" />
          <ShoppingCart size={20} color="#3B643A" weight="light" />
          </div>
        </div>
        <ul className="navbar-ul">
          <li>
            <a href="">Hair</a>{" "}
          </li>
          <li>
            <a href="">Skin</a>{" "}
          </li>
          <li>
            <a href="">Health</a>{" "}
          </li>
          <li>
            <a href="">All Products</a>{" "}
          </li>
          <li>
            <a href="">Community</a>{" "}
          </li>
          <li>
            <a href="">About us</a>{" "}
          </li>
          <li>
            <a href="">Contact us</a>{" "}
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavMid;
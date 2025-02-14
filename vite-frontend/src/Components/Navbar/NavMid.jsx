import "./NavBar.css";
import { MagnifyingGlass, User, Heart, ShoppingCart } from "@phosphor-icons/react";

export default function NavMid() {
  return (
    <>
      <div className="nav">
        <div className="nav-mid">
          <p className="heading">AYURVEDA HUB</p>
          <div className="nav-icons">
          <MagnifyingGlass size={20} color="#3A633C" weight="light" />
          <User size={20} color="#3A633C" weight="light" />
          <Heart size={20} color="#3A633C" weight="light" />
          <ShoppingCart size={20} color="#3A633C" weight="light" />
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

import "./NavBar.css";
import NavMid from "./NavMid";
import { PhoneCall } from "@phosphor-icons/react";

function NavTop() {
  return (
    <>
      <div className="top-nav">
        <PhoneCall size={25} color="#f61313" weight="duotone"/>
        <span className="top-heading-call">+91 8958089580</span>
        <span className="vertical-line"></span>
        <span className="top-heading-email">Ayurvedahub@gmail.com</span>
      </div>
      <NavMid />
    </>
  );
}

export default NavTop;

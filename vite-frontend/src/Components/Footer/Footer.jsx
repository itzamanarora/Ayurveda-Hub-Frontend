import { Phone, Mail, MapPin } from "lucide-react";
import "./Footer.css"; // Import the CSS file
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Get in touch */}
        <div className="footer-section">
          <h3>Get in touch</h3>
          <p>
            <br />
            <a href="mailto:support@ayurvedahubs.co.in" style={{display: "flex", alignItems: "center"}}>
              <Mail
                size={16}
                style={{
                  display: "inline",
                  marginRight: "4px",
                }}
              > </Mail>
              support@ahubs.co.in
            </a>
          </p>
          <div style={{display: "flex", alignItems: "center"}}>
            <MapPin
              size={16}
              style={{
                display: "inline",
                marginRight: "8px",
              }}
            />
            Ayurvedahubs Pvt. Ltd.,
            <br />
            29-A, Duhai Industrial Area, Duhai,
            <br />
            Ghaziabad - 201204
          </div>{" "}
          <br />
          <div style={{display: "flex", alignItems: "center"}}>
            <Phone
              size={16}
              style={{ display: "inline", marginRight: "8px" }}
            />
            +91 8958089580
          </div>
          <br />
          <br />
          {/* Google Play Button */}
          <div className="play-store">
            <h3>Download Ayurveda Hubs App</h3>
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play"
              />
            </a>
          </div>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li>
              <Tooltip title="Shop All Products" placement="right" arrow>
                <Link to={"/Ayurveda-Hub-Frontend/products"}>Shop All</Link>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Shop Hair Care Products" placement="right" arrow>
                <Link to={"/Ayurveda-Hub-Frontend/products?category=hair"}>
                  Hair Care
                </Link>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Shop Skin Care Products" placement="right" arrow>
                <Link to={"/Ayurveda-Hub-Frontend/products?category=skin"}>
                  Skin Care
                </Link>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Shop Health Care Products" placement="right" arrow>
                <Link to={"/Ayurveda-Hub-Frontend/products?category=health"}>
                  Health Care
                </Link>
              </Tooltip>
            </li>
          </ul>
        </div>

        {/* Information */}
        <div className="footer-section">
          <h3>Information</h3>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Privacy Policy for Mobile Apps</a>
            </li>
            <li>
              <a href="#">Shipping and Returns Policy</a>
            </li>
            <li>
              <a href="#">International Delivery</a>
            </li>
          </ul>
        </div>

        {/* Quick Links & Newsletter */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Track Your Order</a>
            </li>
            <li>
              <a href="#">Recycle Project</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
          <h3>Newsletter</h3>
          <p>Subscribe to our Newsletter and join Ayurveda Hub Family today!</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">Copyright © 2024 Ayurveda Hub</div>
    </footer>
  );
}

export default Footer;

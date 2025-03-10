import React from "react";
import { Phone, Mail, MapPin } from 'lucide-react';
import "./Footer.css"; // Import the CSS file
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Get in touch */}
        <div className="footer-section">
          <h3>Get in touch</h3>
          <p>
            <br />
            <a href="mailto:support@ayurvedahubs.co.in">
              <Mail size={16} style={{ display: 'inline', marginRight: '8px', marginTop: '5px' }} />
              support@ahubs.co.in
            </a>
            <br />
          </p>
          <div> <MapPin size={16} style={{ display: 'inline', marginRight: '8px', marginTop: '5px' }} />Ayurvedahubs Pvt. Ltd.,<br />29-A, Duhai Industrial Area, Duhai,<br />Ghaziabad - 201204</div> <br />
          <div><Phone size={16} style={{ display: 'inline', marginRight: '8px' }} />+91 8958089580</div>
          <br />
          <br />
           {/* Google Play Button */}
           <div className="play-store">
            <h3>Download Ayurveda Hubs App</h3>
            <a href="#">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" />
            </a>
          </div>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li><Link to={'products'}>Shop All</Link></li>
            <li><Link to={'products'}>Hair Care</Link></li>
            <li><Link to={'products'}>Skin Care</Link></li>
            <li><Link to={'products'}>Health Care</Link></li>
          </ul>
        </div>

        {/* Information */}
        <div className="footer-section">
          <h3>Information</h3>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Privacy Policy for Mobile Apps</a></li>
            <li><a href="#">Shipping and Returns Policy</a></li>
            <li><a href="#">International Delivery</a></li>
          </ul>
        </div>

        {/* Quick Links & Newsletter */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Track Your Order</a></li>
            <li><a href="#">Recycle Project</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
          <h3>Newsletter</h3>
          <p>Subscribe to our Newsletter and join Amrutam Family today!</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        Copyright © 2024 Ayurveda Hub
      </div>
    </footer>
  );
}

export default Footer;

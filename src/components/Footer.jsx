import React from "react";
import logo from "../img/Logo.png";

function Footer() {
  return (
    <div className="Footer">
      <img src={logo} className="CompanyLogo" alt="Logo" />
      <div className="">
        <div>Product</div>
        <div>Updates</div>
        <div>Security</div>
        <div>Chrome Extension</div>
      </div>
      ======
      <div className="">Company</div>
      <div>About</div>
      <div> Blog </div>
      <div>Join Us</div>
      ======
      <div className="">Help</div>
      <div>Talk to Support</div>
      <div> Support Docs </div>
      <div>API Docs</div>
      <div>System Status</div>
      ======
      <div class="inputWithButton">
        <div>Try Medli for free</div>
        <input type="text" placeholder="Enter your email" />
        <button>Get Started</button>
      </div>
      <svg
        width="1110"
        height="1"
        viewBox="0 0 1110 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect opacity="0.2" width="1110" height="1" fill="black" />
      </svg>
      <p>Terms & Conditions</p>
    </div>
  );
}

export default Footer;

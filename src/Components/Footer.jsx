import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="links-container">
        <p className="footer-links">Terms & Conditions</p>
        <p className="footer-links">Privacy Policy</p>
        <p className="footer-links">Sitemap</p>
        <p className="footer-links">Secure Payment</p>
      </div>
      <div className="info-container">
        <p>
          Registered in England and Wales: No 22 <br /> Copyright Cheshire
          Bushcraft ltd 2020
        </p>
      </div>
    </div>
  );
};

export default Footer;

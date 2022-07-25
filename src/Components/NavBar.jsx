import React from "react";
import "./NavBar.css";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <div className="nav-container">
      <img
        src="/38B6621E-ECD5-425D-B9A2-D133F28AF453_4_5005_c.jpeg"
        alt="logo"
        className="nav-image"
      />
      <NavLinks />
    </div>
  );
};

export default NavBar;

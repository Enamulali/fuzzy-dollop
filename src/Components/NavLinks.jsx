import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavLinks = ({ isOpen }) => {
  return (
    <div className={!isOpen ? "navlinks-container" : "vertical-nav"}>
      <Link to="/">
        <p className="navlinks-text" id="home">
          Home
        </p>
      </Link>
      <Link to="/about">
        <p className="navlinks-text">About</p>
      </Link>
      <Link to="/bushcraft">
        <p className="navlinks-text">Bushcraft</p>
      </Link>
      <Link to="/groups">
        <p className="navlinks-text">Groups</p>
      </Link>
      <Link to="/activities">
        <p className="navlinks-text">Activities</p>
      </Link>
      <Link to="/contact">
        <p className="navlinks-text">Contact</p>
      </Link>
    </div>
  );
};

export default NavLinks;

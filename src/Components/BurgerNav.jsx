import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import NavLinks from "./NavLinks";
import "./NavBar.css";

const BurgerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((curr) => !curr);
  };

  return (
    <div className="burgernav-icon">
      <HamburgerMenu
        isOpen={isOpen}
        menuClicked={handleClick}
        width={24}
        height={20}
        strokeWidth={1}
        rotate={0}
        color="black"
        borderRadius={0}
        animationDuration={0.5}
      />
      {isOpen ? (
        <div className="vertical-nav">
          <NavLinks isOpen={isOpen} />
        </div>
      ) : null}
    </div>
  );
};

export default BurgerNav;

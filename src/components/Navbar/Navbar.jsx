import React from "react";
import { NavbarContainer, NavbarLi, NavbarUl } from "./NavbarStyles";

const Navbar = () => {
  const handleContactClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <NavbarContainer>
      <NavbarUl>
        <NavbarLi>
          <a href="/">Home</a>
        </NavbarLi>
        {/* <NavbarLi>
          <a href="/studies">Studies</a>
        </NavbarLi> */}
        <NavbarLi>
          <a onClick={handleContactClick}>Contact</a>
        </NavbarLi>
        {/* <NavbarLi>
          <a href="/about">About</a>
        </NavbarLi> */}
      </NavbarUl>
    </NavbarContainer>
  );
};

export default Navbar;

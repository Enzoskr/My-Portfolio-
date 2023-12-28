import React from "react";
import { NavbarContainer, NavbarLi, NavbarUl } from "./NavbarStyles";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarUl>
        <NavbarLi>
          <a href="/">Home</a>
        </NavbarLi>
        <NavbarLi>
          <a href="/studies">Studies</a>
        </NavbarLi>
        <NavbarLi>
          <a href="/contact">Contact</a>
        </NavbarLi>
        <NavbarLi>
          <a href="/about">About</a>
        </NavbarLi>
      </NavbarUl>
    </NavbarContainer>
  );
};

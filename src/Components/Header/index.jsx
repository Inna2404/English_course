import React from "react";
import {
  NavListWrapp,
  NavLogo,
  NavList,
  NavItem,
  NavSign,
  MenuBurger,
  MenuToggle,
  MenuBtn,
  NavLogoBurger
} from "./Header.styled-component";

const Header = ({ items }) => {
  return (
    <NavListWrapp>
      <NavLogo>
        <a href="#Home">logo</a>
      </NavLogo>
      <MenuBurger>
        <MenuToggle id="menuToggle" type="checkbox" />

        <MenuBtn htmlFor="menuToggle">
          <span></span>
        </MenuBtn>
        <NavList>
          <NavLogoBurger>logo</NavLogoBurger>

          {items.map((item, index) => (
            <NavItem key={index}>
              <a href={`#${item.id}`}>{item.name}</a>
            </NavItem>
          ))}
          <NavSign>Записатися</NavSign>
        </NavList>
      </MenuBurger>
    </NavListWrapp>
  );
};
export default Header;

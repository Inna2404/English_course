import styled from "styled-components";

export const NavListWrapp = styled("div")`
  margin: 0 120px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  justify-content: space-between;
  display: flex;
  z-index: 13;
  background-color: #ffff;

  @media (max-width: 768px) {
    margin: 0;
  }
  @media (min-width: 769px) {
    margin: 0;
    padding-left: 40px;
  }
  @media (min-width: 1025px) {
    padding: 0 80px;
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 1300px) {
    padding: 0 120px;
  }
`;
export const NavLogo = styled("div")`
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 768px) {
    margin-left: 40px;
  }
  @media (max-width: 1024px) {
    margin-top: 20px;
  }
  @media (min-width: 1025px) {
    font-size: 25px;
  }
`;
export const NavList = styled("ul")`
  display: flex;
  gap: 25px;
  list-style-type: none;

  @media (max-width: 1024px) {
    display: block;
    position: fixed;
    visibility: hidden;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 80px 0;
    list-style: none;
    text-align: center;
    background-color: #fff;
    box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);
  }
  @media (min-width: 1025px) {
    gap: 15px;
  }
  @media (min-width: 1300px) {
    gap: 35px;
  }
`;
export const NavItem = styled("li")`
  margin: auto;

  @media (max-width: 1024px) {
    display: block;
    padding: 12px 24px;
    color: #333;
    // font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      background-color: #cfd8dc;
    }
  }
  @media (min-width: 1025px) {
    font-size: 17px;
  }
`;
export const NavSign = styled("button")`
  display: flex;
  background-color: #ffa471;
  width: 150px;
  height: 42px;
  justify-content: center;
  align-items: center;
  border: none;

  @media (max-width: 1024px) {
    margin: 0 auto;
    margin-top: 40px;
  }
  @media (min-width: 1025px) {
    font-size: 15px;
  }
  @media (min-width: 1300px) {
    font-size: 18px;
    margin-left: 100px;
  }
`;

export const MenuBurger = styled("div")``;
export const MenuBtn = styled("label")`
  display: flex;
  align-items: center;
  position: fixed;
  top: 20px;
  right: 20px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 5;
  margin-right: 20px;

  @media (min-width: 769px) {
    margin-right: 30px;
  }

  & > span,
  & > span::before,
  & > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #616161;
  }

  & > span::before {
    content: "";
    top: -8px;
  }
  & > span::after {
    content: "";
    top: 8px;
  }
  @media (min-width: 1025px) {
    display: none;
  }
`;

export const MenuToggle = styled("input")`
  opacity: 0;

  &:checked ~ ${MenuBtn} > span {
    transform: rotate(45deg);
  }

  &:checked ~ ${MenuBtn} > span::before {
    top: 0;
    transform: rotate(0);
  }
  &:checked ~ ${MenuBtn} > span::after {
    top: 0;
    transform: rotate(90deg);
  }

  &:checked ~ ${NavList} {
    visibility: visible;
    left: 0;
  }
  @media (min-width: 1025px) {
    display: none;
  }
`;

export const NavLogoBurger = styled(NavLogo)`
  display: flex;
  justify-content: center;
  margin: 0 0 50px 0;
  @media (min-width: 1025px) {
    display: none;
  }
`;

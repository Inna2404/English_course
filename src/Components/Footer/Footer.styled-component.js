import styled from "styled-components";

export const FooterBox = styled("footer")`
  position: relative;
  margin-top: 40px;
`;
export const FooterContainer = styled("div")`
  color: #fff;
  bottom: 0;
  width: 100%;
  background-color: #000;
`;
export const FooterBlockConteiner = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 25px 120px;

  @media (max-width: 1024px) {
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const FooterLogo = styled("a")`
  display: flex;
  text-transform: uppercase;
  color: #fff;
  margin-top: 30px;
  font-size: 20px;
  @media (min-width: 1025px) {
    margin-top: 50px;
    font-size: 35px;
  }
`;

export const FooterList = styled("ul")`
  list-style-type: none;

  @media (max-width: 1024px) {
    padding: 0;
    display: flex;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: 1300px) {
    font-size: 25px;
  }
  @media (min-width: 1025px) {
    font-size: 18px;
  }
`;
export const FooterItem = styled("li")`
  & a {
    color: #fff;
  }
`;

export const FooterBlock = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const FooterTitle = styled("h2")`
  font-size: 20px;
  margin-bottom: 14px;
  @media (max-width: 1024px) {
    margin-top: 15px;
  }
  @media (min-width: 1300px) {
    font-size: 35px;
  }
  @media (min-width: 1025px) {
    font-size: 20px;
  }
`;
export const FooterBlockTitle = styled(FooterTitle)``;
export const FooterBlockBtn = styled("button")`
  background-color: #ffa471;
  height: 40px;
  border: none;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin: 15px 0;
  }
  @media (min-width: 1300px) {
    font-size: 25px;
  }
  @media (min-width: 1025px) {
    font-size: 17px;
  }
`;
export const FooterLink = styled("div")`
  display: flex;
  @media (min-width: 1025px) {
    font-size: 18px;

    margin: 0 auto;
  }
  @media (min-width: 1300px) {
    font-size: 20px;

    margin: 0 auto;
  }
`;

export const FooterText = styled("p")`
  display: flex;
  justify-content: center;
  padding-bottom: 80px;

  @media (max-width: 1024px) {
    padding-bottom: 120px;
  }
  @media (min-width: 1300px) {
    font-size: 25px;
  }
  @media (min-width: 1025px) {
    font-size: 18px;
  }
`;

export const FooterLinkGmail = styled("div")`
  color: #fff;
`;

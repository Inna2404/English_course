import styled from "styled-components";

export const FooterBox = styled("footer")`
  position: relative;
  margin-top: 40px;
`;
export const FooterContainer = styled("div")`
  // position: absolute;
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
`;
export const FooterLink = styled("div")``;

export const FooterText = styled("p")`
  display: flex;
  justify-content: center;
  padding-bottom: 80px;

  @media (max-width: 1024px) {
    padding-bottom: 120px;
  }
`;
export const FaceboockIcon = styled("div")`
  background: url("./img/facebook-icon.svg");
  width: 200px;
  height: 200px;
`;

export const InstagramIcon = styled("div")``;

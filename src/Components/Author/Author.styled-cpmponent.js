import styled from "styled-components";

export const AuthorContainer = styled("div")``;
export const AuthorComp = styled("div")`
  display: flex;
  margin: 100px 0;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`;
export const AuthorCompAbout = styled("div")`
  margin-left: 20px;
  @media (max-width: 1024px) {
    order: 1;
    margin: 40px;
  }
`;
export const AuthorCompAboutTitle = styled("h2")`
  @media (max-width: 1024px) {
    font-size: 35px;
  }
  @media (min-width: 1025px) {
    font-size: 40px;
    font-weight: 600;
  }
`;
export const AuthorCompAboutName = styled("h3")`
  @media (max-width: 1024px) {
    font-size: 22px;
    margin: 0;
  }
  @media (min-width: 1025px) {
    font-size: 27px;
    font-weight: 400;
    margin: 0;
  }
`;
export const AuthorCompAboutBlock = styled("ul")`
  display: flex;
  flex-direction: column;
  padding: 0;
  font-size: 20px;

  @media (max-width: 1024px) {
    font-size: 17px;
  }
`;
export const AuthorCompAboutBlockText = styled("li")`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
export const AuthorCompList = styled("ul")`
  display: flex;
  flex-direction: column;
  margin: 10px 0px 0 30px;
  font-size: 17px;

  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;
export const AuthorCompItem = styled("li")``;

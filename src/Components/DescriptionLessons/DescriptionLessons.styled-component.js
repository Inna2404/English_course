import styled from "styled-components";

export const DescriptionLessons = styled("div")`
  // margin: 100px 40px;
  @media (max-width: 1024px) {
    margin: 50px 40px;
  }
  @media (min-width: 1024px) {
    padding: 80px 100px;
  }
`;
export const DescriptionLessonsTitle = styled("h2")`
  font-weight: 600;
  font-size: 48px;
`;
export const DescriptionLessonsBlock = styled("div")`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #ffa471;
`;
export const DescriptionLessonsBlockTitle = styled("h2")`
  font-size: 100px;
  margin: 25px;
  -webkit-text-stroke: 2px #ffa471; /* Штрих для контуру тексту */
  color: transparent;
`;
export const DescriptionLessonsBlockText = styled("p")`
  font-size: 18px;
  padding-left: 35px;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

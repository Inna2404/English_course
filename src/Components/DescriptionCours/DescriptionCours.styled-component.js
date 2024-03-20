import styled from "styled-components";

export const DescriptionCours = styled("div")`
  display: flex;
  justify-content: space-between;
  background: #f9f9f9;
  margin: 100px 40px 0 40px;
  padding: 100px 100px;

  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    padding: 30px;
    margin: 10px;
  }
  @media (min-width: 769px) {
    margin: 10px;
    padding: 30px;
  }
  @media (min-width: 1024px) {
    padding: 80px 100px;
  }
`;
export const DescriptionCoursBlock = styled("div")`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const DescriptionCoursTitle = styled("h2")`
  font-weight: 600;
  font-size: 48px;
`;
export const DescriptionCoursText = styled("p")`
  color: #6b6b6b;
  font-size: 19px;
`;

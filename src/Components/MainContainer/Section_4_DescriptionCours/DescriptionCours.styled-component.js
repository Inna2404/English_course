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
    margin: 0;
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
  color: #000;
`;
export const DescriptionCoursText = styled("p")`
  font-size: 19px;
  line-height: 150%;
`;

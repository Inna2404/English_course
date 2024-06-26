import styled from "styled-components";

export const WhoSuitsContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  padding: 100px 100px;
  padding: 70px;
  margin-top: 100px;
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 1024px) {
    padding: 80px 100px;
  }
`;
export const WrapperWhoSuits = styled("div")`
  width: 50%;
`;
export const WhoSuitsTitle = styled("h2")`
  font-size: 43px;
  font-weight: 600;
  color: #000;
`;
export const WhoSuitsText = styled("div")`
  font-size: 20px;
  padding-bottom: 15px;
  line-height: 150%;

  @media (max-width: 1024px) {
    padding-bottom: 10px;
  }
`;

export const WhoSuitsTextSmall = styled("span")`
  font-size: 20px;
  line-height: 150%;
`;

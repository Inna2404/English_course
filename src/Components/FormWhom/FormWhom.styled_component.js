import styled from "styled-components";

export const ForWhomContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  padding: 100px 100px;
  padding: 70px;
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 1024px) {
    padding: 80px 100px;
  }
`;
export const WrapperForWhom = styled("div")`
  width: 50%;
`;
export const ForWhomTitle = styled("h2")`
  font-size: 43px;
  font-weight: 600;
`;
export const ForWhomText = styled("div")`
  color: #6b6b6b;
  font-size: 20px;
  padding-bottom: 15px;
  @media (max-width: 1024px) {
    padding-bottom: 10px;
  }
`;

export const ForWhomTextSmall = styled("span")`
  color: #6b6b6b;
  font-size: 20px;
`;

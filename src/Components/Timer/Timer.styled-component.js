import styled from "styled-components";

export const TimerWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 60px;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin: 5px 40px;
  }
`;

export const TimerContainer = styled("div")`
  background-color: #000;
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
`;

export const TimerTitle = styled("h2")`
  font-size: 23px;

  @media (max-width: 1024px) {
    font-size: 18px;
    font-weight: 400;
    margin: 0;
  }
  @media (min-width: 1025px) {
    font-size: 20px;
    font-weight: 600;
  }
  @media (min-width: 1300px) {
    font-size: 30px;
    font-weight: 600;
  }
`;

export const TimerText = styled("p")`
  font-size: 20px;

  @media (max-width: 1024px) {
    font-size: 15px;
    font-weight: 600;
    margin: 5px 0;
  }
  @media (min-width: 1025px) {
    font-size: 22px;
    font-weight: 600;
  }
  @media (min-width: 1300px) {
    font-size: 30px;
    font-weight: 600;
    margin: 5px 0;
  }
`;

export const TimerTextSpan = styled("span")`
  color: #ffa471;
  margin-left: 10px;
  text-decoration: line-through;
  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const TimerBlock = styled("div")`
  font-size: 25px;
  font-weight: 900;

  @media (max-width: 1024px) {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  @media (min-width: 1025px) {
    font-size: 25px;
    font-weight: 800;
  }
  @media (min-width: 1300px) {
    font-size: 30px;
    font-weight: 800;
  }
`;

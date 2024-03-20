import styled from "styled-components";

export const WrapperBlock = styled("div")`
  display: flex;
  margin-bottom: 100px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin: 20px 40px;
  }
`;
export const BlockFirst = styled("div")`
  margin: 100px 50px 25px 0;
  width: 100%;
`;
export const BlockFirstTitle = styled("h2")`
  margin-bottom: 40px;
  font-size: 45px;
  @media (max-width: 1024px) {
    margin-bottom: 30px;
    font-size: 30px;
  }
`;
export const BlockFirstText = styled("div")`
  margin-bottom: 40px;
  font-size: 20px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;
export const BlockFirstBtns = styled("div")``;
export const BlockFirstBtn = styled("button")`
  border: none;
  width: 150px;
  height: 42px;
  margin-right: 20px;
  font-size: 16px;
`;
export const BlockFirstBtnOrang = styled("button")`
  border: none;
  width: 200px;
  height: 42px;
  margin: 50px 20px 40px 0;
  background-color: #ffa471;
  font-size: 16px;
`;

export const BlockFirstNum = styled("div")`
  font-weight: 600;
  font-size: 48px;
  display: flex;
`;

export const BlockFirstNumText = styled("div")`
  margin-left: 14px;
  font-size: 18px;
  font-weight: 400;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-basis: min-content;
  
}
`;
export const BlockFirstTextMarg = styled("span")`
  font-size: 20px;
`;

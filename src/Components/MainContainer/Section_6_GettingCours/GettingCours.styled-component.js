import styled from "styled-components";

export const GettingAfterCours = styled("div")`
  background: #ffa4710d;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 30px;
  }
  @media (min-width: 1024px) {
    padding: 80px 100px;
  }
`;
export const GettingAfterCoursTitle = styled("h2")`
  font-weight: 600;
  font-size: 48px;
  color: #000;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
export const GettingAfterCoursBlock = styled("div")`
  display: flex;
  flex-direction: column;
`;
export const GettingAfterCoursBlockText = styled("p")`
  display: flex;
  font-size: 18px;
  align-items: center;
  color: #000;
  line-height: 150%;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const NavSign = styled("button")`
  display: flex;
  background-color: #ffa471;
  width: 150px;
  height: 42px;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 250px;
  border: none;
  font-size: 17px;
`;

export const GettingNavSign = styled(NavSign)`
  margin: 0;
  margin-top: 20px;
`;

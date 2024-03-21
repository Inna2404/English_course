import styled from "styled-components";

export const AbutCoursContainer = styled("div")`
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
    display: flex;
    padding: 40px;
  }
  @media (min-width: 1025px) {
    padding: 80px 100px;
  }
`;
export const AbutCoursWrapper = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1024px) {
    order: 1;
    margin: 0;
    margin-bottom: 20px;
  }

  @media (min-width: 769px) {
    margin: 0;
    padding-top: 15px;
  }
  @media (min-width: 1025px) {
    padding: 0;
  }
`;
export const AbutCoursTitle = styled("h1")`
  font-weight: 600;
  font-size: 48px;
  margin: 0;
  color: #000;
  @media (max-width: 768px) {
    margin: 0;
  }
`;
export const AbutCoursText = styled("p")`
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
`;

export const NavSign = styled("button")`
  display: flex;
  background-color: #ffa471;
  width: 150px;
  height: 42px;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const AbutCoursSign = styled(NavSign)`
  margin-top: 15px;
  font-size: 18px;
`;

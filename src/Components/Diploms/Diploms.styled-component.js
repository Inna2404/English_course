import styled from "styled-components";

export const DiplomContainer = styled("div")`
  margin: 120px;
  background: #f9f9f9;
  @media (max-width: 768px) {
    margin: 10px;
  }
  @media (min-width: 769px) {
    margin: 40px;
  }
`;
export const DiplomWrapp = styled("div")`
  @media (max-width: 768px) {
    padding: 30px;
  }
  @media (min-width: 1024px) {
    padding: 80px 100px;
  }
`;
export const DiplomTitle = styled("h2")`
  font-size: 36px;
  color: #000;
`;
export const SwiperWrapper = styled("div")`
  display: flex;
  justify-content: center;
`;

export const Row = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const SwiperSlider = styled("div")`
  flex: ${(props) => (props.horizontal ? "2" : "1")};
  width: 100%;
`;

export const SwiperSliderImg = styled("img")`
  width: 100%;
  height: auto;
`;

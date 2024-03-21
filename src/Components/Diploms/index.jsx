import React from "react";
import {
  DiplomContainer,
  DiplomWrapp,
  DiplomTitle,
  SwiperWrapper,
  Row,
  SwiperSlider,
  SwiperSliderImg
} from "./Diploms.styled-component";

import photoDiploma2 from "../../img/photo_diploma_2.jpg";
import photoDiploma3 from "../../img/photo_diploma_3.jpg";
import photoDiploma4 from "../../img/photo_diploma_4.jpg";
import photoDiploma5 from "../../img/photo_diploma_5.jpg";

const images = [photoDiploma5, photoDiploma2, photoDiploma3, photoDiploma4];

const isHorizontal = (image) => {
  const img = new Image();
  img.src = image;
  return img.width > img.height;
};
const Diploms = () => {
  const currentImages = images;

  return (
    <DiplomContainer>
      <DiplomWrapp>
        <DiplomTitle>Дипломи</DiplomTitle>
        <SwiperWrapper>
          <Row>
            {currentImages.map((image, index) => (
              <SwiperSlider horizontal={isHorizontal(image)} key={index}>
                <SwiperSliderImg
                  active={true}
                  src={image}
                  alt={`photo diploma_${index + 1}`}
                  index={index}
                />
              </SwiperSlider>
            ))}
          </Row>
        </SwiperWrapper>
      </DiplomWrapp>
    </DiplomContainer>
  );
};

export default Diploms;

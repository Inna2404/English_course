// import React, { useState } from "react";
// import photoDiploma1 from "../../img/photo_diploma_1.jpg";
// import photoDiploma2 from "../../img/photo_diploma_2.jpg";
// import photoDiploma3 from "../../img/photo_diploma_3.jpg";
// import photoDiploma4 from "../../img/photo_diploma_4.jpg";
// import photoDiploma5 from "../../img/photo_diploma_5.jpg";
// import photoDiploma6 from "../../img/photo_diploma_6.jpg";
// import photoDiploma7 from "../../img/photo_diploma_7.jpg";
// import photoDiploma8 from "../../img/photo_diploma_8.jpg";
// import photoDiploma9 from "../../img/photo_diploma_9.jpg";
// import photoDiploma10 from "../../img/photo_diploma_10.jpg";
// import photoDiploma11 from "../../img/photo_diploma_11.jpg";
// import styled from "styled-components";

// const images = [
//   photoDiploma1,
//   photoDiploma2,
//   photoDiploma3,
//   photoDiploma4,
//   photoDiploma5,
//   photoDiploma6,
//   photoDiploma7,
//   photoDiploma8,
//   photoDiploma9,
//   photoDiploma10,
//   photoDiploma11
// ];

// const Diploms = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const totalImages = images.length;

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
//   };
//   return (
//     <div>
//       <div>Дипломи</div>
//       <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

//       {/* <SwiperWrapper> */}
//       {/* <SwiperSliderImg
//           active={true}
//           src={photoDiploma1}
//           alt="photo diploma_1"
//           className="photo"
//         />
//         <SwiperSliderImg
//           active={true}
//           src={photoDiploma2}
//           alt="photo diploma_2"
//           className="photo"
//         />
//         <SwiperSliderImg
//           active={true}
//           src={photoDiploma3}
//           alt="photo diploma_3"
//           className="photo"
//         />
//         <SwiperSliderImg
//           active={true}
//           src={photoDiploma4}
//           alt="photo diploma_4"
//           className="photo"
//         />
//         <SwiperSliderImg
//           active={true}
//           src={photoDiploma5}
//           alt="photo diploma_5"
//           className="photo"
//         />
//         <SwiperSliderImg
//           active={true}
//           src={photoDiploma6}
//           alt="photo diploma_5"
//           className="photo"
//         />
//         <SwiperSliderImg
//           active={true}
//           src={photoDiploma7}
//           alt="photo diploma_5"
//           className="photo"
//         />
//         <SwiperSliderImg
//           active={true}
//           src={photoDiploma8}
//           alt="photo diploma_5"
//           className="photo"
//         />
//         <SwiperSliderImg
//           active={true}
//           src={photoDiploma9}
//           alt="photo diploma_5"
//           className="photo"
//         />
//         <SwiperSliderImg
//           active={true}
//           src={photoDiploma10}
//           alt="photo diploma_5"
//           className="photo"
//         />
//         <SwiperSliderImg
//           active={true}
//           src={photoDiploma11}
//           alt="photo diploma_5"
//           className="photo"
//         />
//       </SwiperWrapper> */}
//       <SwiperBtnNext onClick={nextSlide}>Вперед</SwiperBtnNext>
//       <SwiperBtnPrev onClick={prevSlide}>Назад</SwiperBtnPrev>

//       <div className="diplome_img"></div>
//     </div>
//   );
// };

// export default Diploms;

// const SwiperWrapper = styled("div")`
//   width: 500px;
//   height: 300px;
//   position: relative;
//   overflow: hiden;
// `;

// // const SwiperSlider = styled("div")`
// //   text-align: center;
// //   font-size: 18px;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// // `;

// const SwiperSliderImg = styled("img")`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   opacity: ${(props) => (props.active ? 1 : 0)};
//   transition: opacity 0.5s ease;
// `;

// const SwiperBtnNext = styled("button")`
//   //   position: absolute;
//   //   top: 50%;
//   //   transform: translateY(-50%);
//   z-index: 1;
//   right: 10px;
// `;

// const SwiperBtnPrev = styled("button")`
//   //   position: absolute;
//   //   top: 50%;
//   //   transform: translateY(-50%);
//   z-index: 1;
//   left: 10px;
// `;

import React, { useState } from "react";
import styled from "styled-components";

// import "../../../src/App.css";

// Ваші імпорти фотографій
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

const DiplomContainer = styled("div")`
  margin: 120px;
  background: #f9f9f9;
  @media (max-width: 768px) {
    margin: 10px;
  }
  @media (min-width: 769px) {
    margin: 0;
  }
`;
const DiplomWrapp = styled("div")`
  @media (max-width: 768px) {
    padding: 30px;
  }
  @media (min-width: 1024px) {
    padding: 80px 100px;
  }
`;
const DiplomTitle = styled("h2")`
  font-size: 36px;
`;
const SwiperWrapper = styled("div")`
  display: flex;
  justify-content: center;
`;

const Row = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const SwiperSlider = styled("div")`
  flex: ${(props) => (props.horizontal ? "2" : "1")};
  width: 100%;
`;

const SwiperSliderImg = styled("img")`
  width: 100%;
  height: auto;
`;

export default Diploms;

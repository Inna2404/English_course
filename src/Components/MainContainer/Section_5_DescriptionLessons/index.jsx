import React from "react";

import {
  DescriptionLessons,
  DescriptionLessonsBlock,
  DescriptionLessonsBlockText,
  DescriptionLessonsTitle,
  DescriptionLessonsBlockTitle
} from "./DescriptionLessons.styled-component";

const DescriptionAboutLessons = ({ decription }) => {
  return (
    <DescriptionLessons>
      <DescriptionLessonsTitle>Опис уроків</DescriptionLessonsTitle>
      {decription.map((item, index) => {
        return (
          <DescriptionLessonsBlock key={index}>
            <DescriptionLessonsBlockTitle>
              {item.number}
            </DescriptionLessonsBlockTitle>
            <DescriptionLessonsBlockText>
              {item.text}
            </DescriptionLessonsBlockText>
          </DescriptionLessonsBlock>
        );
      })}
    </DescriptionLessons>
  );
};

export default DescriptionAboutLessons;

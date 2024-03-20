import React from "react";
import {
  AbutCoursContainer,
  AbutCoursWrapper,
  AbutCoursTitle,
  AbutCoursText,
  AbutCoursSign
} from "./AboutCours.styled-component";

const AboutCours = () => {
  return (
    <AbutCoursContainer id="AboutCours">
      <div className="AbutCoursImg"></div>
      <AbutCoursWrapper>
        <AbutCoursTitle>Про курс</AbutCoursTitle>
        <AbutCoursText>
          Курс складається з 4-х відео-уроків, що охоплюють усі 12 часів
          англійської мови! Кожен відео-урок включає усні схематичні пояснення
          часових конструкцій у візуально цікавому форматі та кумедних
          мікро-контекстах! Тривалість міні-курсу – лише один вікенд! Проте він
          залишиться з вами назавжди
        </AbutCoursText>
        <AbutCoursSign>Записатися</AbutCoursSign>
      </AbutCoursWrapper>
    </AbutCoursContainer>
  );
};

export default AboutCours;

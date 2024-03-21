import React from "react";
import { MainContainer } from "./MainContainer.styled-components";
import CoursBlock from "./Section_1_CoursBlock";
import WhoSuits from "./Section_2_WhoSuits";
import AboutCours from "./Section_3_AboutCours";
import DescriptionAboutCours from "./Section_4_DescriptionCours";
import DescriptionsBlockLessons from "./Section_5_DescriptionLessons/DescriprionBlock";
import SectionGettingCours from "./Section_6_GettingCours/SectionGettingCours";
import SectionAuthor from "./Section_7_Author/SectionAuthor";

const SectionMain = () => {
  return (
    <MainContainer>
      <CoursBlock />
      <WhoSuits />
      <AboutCours />
      <DescriptionAboutCours />
      <DescriptionsBlockLessons />
      <SectionGettingCours />
      <SectionAuthor />
    </MainContainer>
  );
};
export default SectionMain;

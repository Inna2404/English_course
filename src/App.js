import React from "react";
import "./App.css";

import styled from "styled-components";
import Header from "./Components/Header/index";
import CoursBlock from "./Components/CoursBlock";
import FormWhom from "./Components/FormWhom";
import AboutCours from "./Components/AboutCours";
import DescriptionAboutCours from "./Components/DescriptionCours";
import DescriptionAboutLessons from "./Components/DescriptionLessons";
import GettingCours from "./Components/GettingCours";
import Author from "./Components/Author";

import Diploms from "./Components/Diploms";
import Footer from "./Components/Footer";
import Timer from "./Components/Timer";
const navItems = [
  {
    name: "Для чого курс?",
    id: "FormWhom"
  },
  { name: "Про курс", id: "AboutCours" },
  { name: "Опис курсу", id: "DescriptionAboutCours" },
  { name: "Що ти отримаєш?", id: "GettingCours" },
  { name: "Про автора", id: "Author" }
];
const authorItems = [
  {
    name: "17 років у викладанні англійської студентам різних мовних рівнів та спеціальностей у Львівському університеті, ІТ компаніях та фінансових установах"
  },
  {
    name: "Досвід тривалого проживання у Лондоні"
  },
  {
    name: "Безумовна любов до студентів і викладання"
  },
  {
    name: "Численні авторські розробки англомовних навчальних матеріалів авторка:",
    subItems: [
      { name: "Курсу «English Tenses: Weekend with Eddie»" },
      { name: "Курсу «General English»" },
      { name: "«A-to-Z of Business and Economics»: mini-dictionary" },
      { name: "«English planner»" },
      { name: "Статей у численних наукових виданнях України та світу" }
    ]
  },
  {
    name: "Багаторічний досвід проведення англомовних квестів, ігор, олімпіад та створення е-курсів"
  },
  {
    name: "Додаткові бонуси для потіхи власного его та рівня кваліфікації: диплом кандидата педагогічних наук та атестат доцента"
  }
];

const MainContainer = styled("div")`
  @media (max-width: 1024px) {
    margin: 0;
  }
  @media (min-width: 1025px) {
    margin: 150px 80px 0 80px;
  }
  @media (min-width: 1300px) {
    margin: 150px 120px 0 120px;
  }
`;

// roundabout

function App() {
  return (
    <div className="App">
      <MainContainer>
        <Header items={navItems} />
        <CoursBlock />

        <FormWhom />
        <AboutCours />
        <DescriptionAboutCours />
        <DescriptionAboutLessons />
        <GettingCours />
        <Author authorItems={authorItems} />
      </MainContainer>

      <Diploms />
      <Footer />
      <Timer />
    </div>
  );
}

export default App;

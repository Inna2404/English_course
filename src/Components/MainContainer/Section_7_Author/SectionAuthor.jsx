import React from "react";
import Author from ".";

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

const SectionAuthor = () => {
  return (
    <>
      <Author items={authorItems} />
    </>
  );
};
export default SectionAuthor;

import React from "react";
import GettingCours from ".";

const coursGetting = [
  {
    name: " Знатимете чому на Олімпіаді з логіки перше місце отримала б англійська граматика"
  },
  { name: "Опануєте усі можливі часові конструкції для побудови висловлювань" },
  {
    name: "Упевнено систематизуєте ваші знання про граматику і залежні від неї конструкції, що є характерними для різноманітних комунікативнихситуацій"
  },
  {
    name: " Отримаєте естетично-приємний, проте, віртуальний досвід спілкування під супроводом неймовірно талановитого викладача"
  },
  {
    name: " Матимете чудовий досвід навчання за допомогою застосування сучасних методів, що безумовно сприятиме створенню максимально наближених до реальності мовних ситуацій та атмосфери присутності у автентично-мовному середовищі"
  }
];

const SectionGettingCours = () => {
  return (
    <>
      <GettingCours getting={coursGetting} />
    </>
  );
};

export default SectionGettingCours;

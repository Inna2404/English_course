import React from "react";
import {
  GettingAfterCours,
  GettingAfterCoursBlock,
  GettingAfterCoursTitle,
  GettingNavSign,
  GettingAfterCoursBlockText
} from "./GettingCours.styled-component";

const GettingCours = () => {
  return (
    <GettingAfterCours id="GettingCours">
      <div className="GettingAfterCoursImg"></div>
      <GettingAfterCoursTitle>
        Що ви отримаєте після проходження курсу?
      </GettingAfterCoursTitle>
      <GettingAfterCoursBlock>
        <GettingAfterCoursBlockText>
          <div className="GettingAfterCoursBlockArrow"></div>
          Знатимете чому на Олімпіаді з логіки перше місце отримала б англійська
          граматика
        </GettingAfterCoursBlockText>
        <GettingAfterCoursBlockText>
          <div className="GettingAfterCoursBlockArrow"></div>
          Опануєте усі можливі часові конструкції для побудови висловлювань
        </GettingAfterCoursBlockText>
        <GettingAfterCoursBlockText>
          <div className="GettingAfterCoursBlockArrow"></div>
          Упевнено систематизуєте ваші знання про граматику і залежні від неї
          конструкції, що є характерними для різноманітних комунікативних
          ситуацій
        </GettingAfterCoursBlockText>
        <GettingAfterCoursBlockText>
          <div className="GettingAfterCoursBlockArrow"></div>
          Отримаєте естетично-приємний, проте, віртуальний досвід спілкування
          під супроводом неймовірно талановитого викладача
        </GettingAfterCoursBlockText>
        <GettingAfterCoursBlockText>
          <div className="GettingAfterCoursBlockArrow"> </div>
          Матимете чудовий досвід навчання за допомогою застосування сучасних
          методів, що безумовно сприятиме створенню максимально наближених до
          реальності мовних ситуацій та атмосфери присутності у
          автентично-мовному середовищі
        </GettingAfterCoursBlockText>
        <GettingNavSign>Записатися</GettingNavSign>
      </GettingAfterCoursBlock>
    </GettingAfterCours>
  );
};

export default GettingCours;

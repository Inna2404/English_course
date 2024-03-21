import React from "react";

import {
  DescriptionCours,
  DescriptionCoursBlock,
  DescriptionCoursText,
  DescriptionCoursTitle
} from "./DescriptionCours.styled-component";

const DescriptionAboutCours = () => {
  return (
    <DescriptionCours id="DescriptionAboutCours">
      <DescriptionCoursBlock>
        <DescriptionCoursTitle>Опис курсу</DescriptionCoursTitle>
        <DescriptionCoursText>
          Кожний з відео-уроків курсу – це подорож крізь три часові аспекти:
          теперішність, минулість та майбутність, а характерні для усіх з них 4
          часові категорії дадуть вам можливість зрозуміти звідки у англійській
          аж 12 часів! І нарешті доведуть, що саме ці конструкції належать
          найлогічнішій системі побудови думок в усій мовній картині світу!
          Візуальні схеми, використані в курсі, слугуватимуть переконливою
          підтримкою розуміння усних пояснень викладача
        </DescriptionCoursText>
        <DescriptionCoursText>
          Попри засвоєння правил використання часових та похідних конструкцій у
          побудованих кумедно-цікавих контекстах, які можна з легкістю
          видозмінювати в залежності від ваших особистих комунікативних потреб,
          ви додатково отримаєте завдання від Равлика Едді – головного персонажа
          усіх часових категорій – та разом з викладачем розберете помилки і
          нюанси потенційних складнощів, що неминуче трапляються на усіх етапах
          навчання!
        </DescriptionCoursText>
      </DescriptionCoursBlock>
      <div className="askImg"></div>
    </DescriptionCours>
  );
};
export default DescriptionAboutCours;

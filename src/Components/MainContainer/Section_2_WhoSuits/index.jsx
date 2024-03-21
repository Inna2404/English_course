import React from "react";

import {
  WhoSuitsContainer,
  WrapperWhoSuits,
  WhoSuitsTitle,
  WhoSuitsText,
  WhoSuitsTextSmall
} from "./WhoSuits.styled_component";

const WhoSuits = () => {
  return (
    <WhoSuitsContainer id="WhoSuits">
      <WrapperWhoSuits>
        <WhoSuitsTitle>Кому підходить?</WhoSuitsTitle>
        <WhoSuitsText>
          Усім, хто прагне врешті зрозуміти логіку часових конструкцій і
          назавжди попрощатися з нав’язливою ідеєю, що англійські часи – це
          страшний сон! Якщо ви зацікавлені у покращенні свого рівня володіння
          англійською мовою, прагнете вільно висловлювати свої думки, долаючи
          страх говоріння іноземною мовою, але у вас, як завжди, дуже обмежений
          ресурс часу, то цей міні-екскурс по часах саме для вас, адже займе
          лише один з вікендів у вашому житті.
        </WhoSuitsText>
        <WhoSuitsTextSmall>
          Подаруйте собі цю чудову подорож в часі, де ще ніхто не побував! І,
          повірте, це буде найяскравіша оповідь про вихідні у понеділок на
          каві-брейку!
        </WhoSuitsTextSmall>
      </WrapperWhoSuits>
      <div className="askImg"></div>
    </WhoSuitsContainer>
  );
};

export default WhoSuits;

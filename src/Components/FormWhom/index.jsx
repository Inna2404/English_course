import React from "react";

import {
  ForWhomContainer,
  WrapperForWhom,
  ForWhomTitle,
  ForWhomText,
  ForWhomTextSmall
} from "./FormWhom.styled_component";

const FormWhom = () => {
  return (
    <ForWhomContainer id="FormWhom">
      <WrapperForWhom>
        <ForWhomTitle>Кому підходить?</ForWhomTitle>
        <ForWhomText>
          Усім, хто прагне врешті зрозуміти логіку часових конструкцій і
          назавжди попрощатися з нав’язливою ідеєю, що англійські часи – це
          страшний сон! Якщо ви зацікавлені у покращенні свого рівня володіння
          англійською мовою, прагнете вільно висловлювати свої думки, долаючи
          страх говоріння іноземною мовою, але у вас, як завжди, дуже обмежений
          ресурс часу, то цей міні-екскурс по часах саме для вас, адже займе
          лише один з вікендів у вашому житті.
        </ForWhomText>
        <ForWhomTextSmall>
          Подаруйте собі цю чудову подорож в часі, де ще ніхто не побував! І,
          повірте, це буде найяскравіша оповідь про вихідні у понеділок на
          каві-брейку!
        </ForWhomTextSmall>
      </WrapperForWhom>
      <div className="askImg"></div>
    </ForWhomContainer>
  );
};

export default FormWhom;

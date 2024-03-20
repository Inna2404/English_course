import {
  WrapperBlock,
  BlockFirst,
  BlockFirstTitle,
  BlockFirstText,
  BlockFirstTextMarg,
  BlockFirstBtn,
  BlockFirstBtns,
  BlockFirstBtnOrang,
  BlockFirstNum,
  BlockFirstNumText
} from "./CoursBlock.styled_component";

const CoursBlock = () => {
  return (
    <WrapperBlock id="Home">
      <BlockFirst>
        <BlockFirstTitle>
          Курс «English Tenses:
          <br />
          <span>Weekend with Eddie»</span>
        </BlockFirstTitle>
        <BlockFirstText>
          Найулюбленіший та найпопулярніший серед студентів курс, що відкриває
          двері у світ складної граматики у простий спосіб. Більше жодних
          заморочок, зубріння нудних правил і купи списаних паперів! Відкрийте
          для себе цікаву подорож в часі за допомогою логіки і асоціацій.
        </BlockFirstText>
        <BlockFirstTextMarg>
          Знайомтесь з новими друзями – Хельгою та равликом Едді, з якими ви не
          лише навчитесь секретиків, які так ретельно приховують часи
          англійської, а ще й неодмінно порозважаєтесь!
        </BlockFirstTextMarg>
        <BlockFirstBtns>
          <BlockFirstBtnOrang>Зареєструватися</BlockFirstBtnOrang>
          <BlockFirstBtn>Про курс</BlockFirstBtn>
        </BlockFirstBtns>
        <BlockFirstNum>
          +800
          <BlockFirstNumText>Задоволених студентів</BlockFirstNumText>
        </BlockFirstNum>
      </BlockFirst>
      <div className="BlockSecond"></div>
    </WrapperBlock>
  );
};

export default CoursBlock;

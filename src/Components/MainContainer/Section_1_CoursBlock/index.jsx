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
  BlockFirstNumText,
  BlockFirstTitleSpan
} from "./CoursBlock.styled_component";

const CoursBlock = () => {
  return (
    <WrapperBlock id="Home">
      <BlockFirst>
        <BlockFirstTitle>
          Курс «English Tenses:
          <br />
          <BlockFirstTitleSpan>Weekend with Eddie»</BlockFirstTitleSpan>
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
          <BlockFirstBtnOrang>
            <a
              href="https://ad-astra-school.kwiga.com/courses/english-with-eddie"
              target="_blank"
            >
              Зареєструватися
            </a>
          </BlockFirstBtnOrang>
          <BlockFirstBtn>
            <a href="#AboutCours">Про курс</a>
          </BlockFirstBtn>
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

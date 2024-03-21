import {
  AuthorComp,
  AuthorCompAbout,
  AuthorCompAboutTitle,
  AuthorCompAboutName,
  AuthorCompAboutBlock,
  AuthorCompAboutBlockText,
  AuthorCompList,
  AuthorCompItem,
  AuthorContainer
} from "./Author.styled-cpmponent";

const Author = ({ items }) => {
  return (
    <AuthorContainer id="Author">
      <AuthorComp>
        <div className="Autor_photo"></div>
        <AuthorCompAbout>
          <AuthorCompAboutTitle>Про автора</AuthorCompAboutTitle>
          <AuthorCompAboutName>Ольга Патієвич</AuthorCompAboutName>

          <AuthorCompAboutBlock>
            {items.map((item, index) => (
              <div key={index}>
                <AuthorCompAboutBlockText>
                  <div className="AutorAboutBlockArrow"></div>
                  {item.name}
                </AuthorCompAboutBlockText>
                {item.subItems && (
                  <AuthorCompList>
                    {item.subItems.map((subItem, subIndex) => (
                      <AuthorCompItem key={subIndex}>
                        {subItem.name}
                      </AuthorCompItem>
                    ))}
                  </AuthorCompList>
                )}
              </div>
            ))}
          </AuthorCompAboutBlock>
        </AuthorCompAbout>
      </AuthorComp>
    </AuthorContainer>
  );
};

export default Author;

{
  /* <AuthorCompAboutBlock>
  <AuthorCompAboutBlockText>
    <div className="AutorAboutBlockArrow"></div>
    17 років у викладанні англійської студентам різних мовних рівнів та
    спеціальностей у Львівському університеті, ІТ компаніях та
    фінансових установах
  </AuthorCompAboutBlockText>
  <AuthorCompAboutBlockText>
    <div className="AutorAboutBlockArrow"></div>
    Досвід тривалого проживання у Лондоні
  </AuthorCompAboutBlockText>
  <AuthorCompAboutBlockText>
    <div className="AutorAboutBlockArrow"></div>
    Безумовна любов до студентів і викладання
  </AuthorCompAboutBlockText>
  <AuthorCompAboutBlockText>
    <div className="AutorAboutBlockArrow"></div>
    Численні авторські розробки англомовних навчальних матеріалів
    авторка:
  </AuthorCompAboutBlockText>
  <AuthorCompList>
    <AuthorCompItem>
      Курсу «English Tenses: Weekend with Eddie»
    </AuthorCompItem>
    <AuthorCompItem>Курсу «General English»</AuthorCompItem>
    <AuthorCompItem>
      «A-to-Z of Business and Economics»: mini-dictionary
    </AuthorCompItem>
    <AuthorCompItem>«English planner»</AuthorCompItem>
    <AuthorCompItem>
      Статей у численних наукових виданнях України та світу
    </AuthorCompItem>
  </AuthorCompList>
  <AuthorCompAboutBlockText>
    <div className="AutorAboutBlockArrow"></div>
    Багаторічний досвід проведення англомовних квестів, ігор, олімпіад
    та створення е-курсів
  </AuthorCompAboutBlockText>
  <AuthorCompAboutBlockText>
    <div className="AutorAboutBlockArrow"></div>
    Додаткові бонуси для потіхи власного его та рівня кваліфікації:
    диплом кандидата педагогічних наук та атестат доцента
  </AuthorCompAboutBlockText>
</AuthorCompAboutBlock> */
}

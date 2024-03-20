import React from "react";

import {
  FooterBox,
  FooterContainer,
  FooterBlockConteiner,
  FooterList,
  FooterBlockTitle,
  FooterItem,
  FooterBlock,
  FooterTitle,
  FooterBlockBtn,
  FooterLink,
  FooterLogo,
  FooterText,
  InstagramIcon,
  FaceboockIcon
} from "./Footer.styled-component";
const Footer = () => {
  return (
    <FooterBox>
      <FooterContainer>
        <FooterBlockConteiner>
          <FooterLogo href="Home">logo</FooterLogo>

          <FooterList>
            <FooterTitle>Меню</FooterTitle>
            <FooterItem>
              <a href="#FormWhom">Для кого курс? </a>
            </FooterItem>
            <FooterItem>
              <a href="#AboutCours">Про курс</a>
            </FooterItem>
            <FooterItem>
              <a href="#DescriptionAboutCours">Опискурсу</a>
            </FooterItem>
            <FooterItem>
              <a href="#GettingCours">Що ти отримаєш? </a>
            </FooterItem>
            <FooterItem>
              <a href="#Author">Про автора</a>
            </FooterItem>
          </FooterList>
          <FooterBlock>
            <FooterBlockTitle>Зареєструйся на курс</FooterBlockTitle>
            <FooterBlockBtn>Записатися</FooterBlockBtn>
            <FooterLink>
              <a href="">infoemail@gmail.com</a>
              <a href="">
                <div className="instagram_icon"></div>
              </a>
              <a href="">
                <div className="facebook_icon"></div>
              </a>
            </FooterLink>
          </FooterBlock>
        </FooterBlockConteiner>
        <FooterText>Copyright@2023 | All rights reserved</FooterText>
      </FooterContainer>
    </FooterBox>
  );
};

export default Footer;

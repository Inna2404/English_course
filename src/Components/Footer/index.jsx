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
  FooterLinkGmail
} from "./Footer.styled-component";
const Footer = ({ items }) => {
  return (
    <FooterBox>
      <FooterContainer>
        <FooterBlockConteiner>
          <FooterLogo href="Home">logo</FooterLogo>
          <FooterList>
            <FooterTitle>Меню</FooterTitle>
            {items.map((item, index) => {
              return (
                <FooterItem key={index}>
                  <a href={`#${item.id}`}>{item.name} </a>
                </FooterItem>
              );
            })}
          </FooterList>
          <FooterBlock>
            <FooterBlockTitle>Зареєструйся на курс</FooterBlockTitle>
            <FooterBlockBtn>
              <a
                href="https://ad-astra-school.kwiga.com/courses/english-with-eddie"
                target="_blank"
              >
                Записатися
              </a>
            </FooterBlockBtn>
            <FooterLink>
              <a href="https://mail.google.com/mail/" target="_blank">
                <FooterLinkGmail>infoemail@gmail.com</FooterLinkGmail>
              </a>
              <a
                href="https://www.instagram.com/ad_astra_english_/?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
                target="_blank"
              >
                <div className="instagram_icon"></div>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61555731793404"
                target="_blank"
              >
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

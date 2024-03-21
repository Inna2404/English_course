import React from "react";
import Header from ".";

const navItems = [
  {
    name: "Для чого курс?",
    id: "WhoSuits"
  },
  { name: "Про курс", id: "AboutCours" },
  { name: "Опис курсу", id: "DescriptionAboutCours" },
  { name: "Що ти отримаєш?", id: "GettingCours" },
  { name: "Про автора", id: "Author" }
];

const HeaderNav = () => {
  return (
    <>
      <Header items={navItems} />
    </>
  );
};

export default HeaderNav;

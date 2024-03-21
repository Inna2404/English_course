import React from "react";
import Footer from ".";
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
const SectionFooter = () => {
  return (
    <>
      <Footer items={navItems} />
    </>
  );
};

export default SectionFooter;

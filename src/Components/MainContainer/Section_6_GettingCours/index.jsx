import React from "react";
import {
  GettingAfterCours,
  GettingAfterCoursBlock,
  GettingAfterCoursTitle,
  GettingNavSign,
  GettingAfterCoursBlockText
} from "./GettingCours.styled-component";

const GettingCours = ({ getting }) => {
  return (
    <GettingAfterCours id="GettingCours">
      <div className="GettingAfterCoursImg"></div>
      <GettingAfterCoursTitle>
        Що ви отримаєте після проходження курсу?
      </GettingAfterCoursTitle>
      <GettingAfterCoursBlock>
        {getting.map((item, index) => {
          return (
            <GettingAfterCoursBlockText key={index}>
              <div className="GettingAfterCoursBlockArrow"></div>
              {item.name}
            </GettingAfterCoursBlockText>
          );
        })}

        <GettingNavSign>
          <a
            href="https://ad-astra-school.kwiga.com/courses/english-with-eddie"
            target="_blank"
          >
            Записатися
          </a>
        </GettingNavSign>
      </GettingAfterCoursBlock>
    </GettingAfterCours>
  );
};

export default GettingCours;

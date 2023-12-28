import React from "react";
import { AboutMeContainer, AboutMeWrapper } from "./AboutMeStyled";
import AboutMeCards from "./AboutMeCards";
import { AboutMeData } from "../../data/AboutMe";

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <h2>About Me</h2>
      <AboutMeContainer>
        {AboutMeData.map((AboutMeCard) => {
          return <AboutMeCards key={AboutMeCard.id} {...AboutMeCard} />;
        })}
      </AboutMeContainer>
    </AboutMeWrapper>
  );
};

export default AboutMe;

import React from "react";
import { AboutMeContainer } from "./AboutMeStyled";
import AboutMeCards from "./AboutMeCards";
import { AboutMeData } from "../../data/AboutMe";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      {AboutMeData.map((AboutMeCard) => {
        return <AboutMeCards key={AboutMeCard.id} {...AboutMeCard} />;
      })}
    </AboutMeContainer>
  );
};

export default AboutMe;

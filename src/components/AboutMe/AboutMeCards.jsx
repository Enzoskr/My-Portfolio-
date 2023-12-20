import React from "react";
import { AboutMeCard } from "./AboutMeStyled";

const AboutMeCards = ({ img, desc, id }) => {
  return (
    <AboutMeCard>
      <img src={img} alt={id} />
      <p>{desc}</p>
    </AboutMeCard>
  );
};

export default AboutMeCards;

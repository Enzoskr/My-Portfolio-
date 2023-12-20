import React from "react";
import {
  HeroContact,
  HeroContainer,
  HeroDescription,
  HeroImg,
  HeroText,
  HeroTitle,
} from "./HeroStyles";
import HeroPhoto from "../../assets/HeroPhoto.jpg";
import Button from "../UI/Button/Button";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroText>
        <HeroTitle>
          Hi, I'm <span>Enzo</span>
        </HeroTitle>
        <HeroDescription>
          I'm a fullstack developer with a passion for building beautiful,
          functional and responsive web applications.
        </HeroDescription>
        <HeroContact>
          <Button>Contact-Me</Button>
        </HeroContact>
      </HeroText>
      <HeroImg src={HeroPhoto} alt="hero" />
    </HeroContainer>
  );
};

export default Hero;

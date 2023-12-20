import React from "react";
import {
  ButtonsContainer,
  HeroContact,
  HeroContainer,
  HeroDescription,
  HeroImg,
  HeroText,
  HeroTitle,
} from "./HeroStyles";
import HeroPhoto from "../../assets/HeroPhoto.jpg";
import Button from "../UI/Button/Button";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

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
          <Button radius="8">Contact-Me</Button>
          <ButtonsContainer>
            <motion.div whileTap={{ scale: 0.95 }}>
              <a href="https://github.com/Enzoskr">
                {" "}
                <FaGithub />
              </a>
            </motion.div>
            <motion.div whileTap={{ scale: 0.95 }}>
              <a href="https://www.linkedin.com/in/enzo-escudero-4740771ba/">
                <FaLinkedin />
              </a>
            </motion.div>
          </ButtonsContainer>
        </HeroContact>
      </HeroText>
      <HeroImg src={HeroPhoto} alt="hero" />
    </HeroContainer>
  );
};

export default Hero;

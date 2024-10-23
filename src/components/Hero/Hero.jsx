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
// import HeroPhoto from "../../assets/HeroPhoto.jpg";
import HeroPhoto from "../../assets/fotoportfolio.jpg";

import Button from "../UI/Button/Button";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const handleContactClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <HeroContainer>
      <HeroText>
        <HeroTitle>
          Hola, soy <span>Enzo</span>!🚀
        </HeroTitle>
        <HeroDescription>
          {/* I'm a fullstack developer with a passion for building beautiful,
          functional and responsive web applications. */}
          Soy un desarrollador fullstack con gran entusiasmo por la creación de
          paginas web, útiles estéticas y funcionales.
        </HeroDescription>
        <HeroContact>
          <Button
            onClick={handleContactClick}
            href="https://www.linkedin.com/in/enzo-escudero-4740771ba/"
            radius="8"
          >
            Contacto
          </Button>
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

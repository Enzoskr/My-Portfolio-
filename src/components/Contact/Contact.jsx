import React from "react";
import {
  ContactBuild,
  ContactContainer,
  ContactTitle,
  ContactWrapper,
  Contacts,
} from "./ContactStyles";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle> Contact</ContactTitle>
      <ContactWrapper>
        <Contacts href="https://www.linkedin.com/in/enzo-escudero-4740771ba/">
          LinkedIn
        </Contacts>
        <Contacts href="https://github.com/Enzoskr">GitHub</Contacts>
        <Contacts>Correo</Contacts>
        <Contacts href="https://docs.google.com/document/d/1FhRsF_BAZ-WajSN4bgu-ST37VPX9kpq4iYLDoYEhuoQ/edit?usp=sharing">
          Curriculum
        </Contacts>
      </ContactWrapper>
      <ContactBuild>2023 build with React.JSX</ContactBuild>
    </ContactContainer>
  );
};

export default Contact;

import React from "react";
import {
  ContactBuild,
  ContactContainer,
  ContactWrapper,
  Contacts,
} from "./ContactStyles";

export const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact</h2>
      <ContactWrapper>
        <Contacts href="https://www.linkedin.com/in/enzo-escudero-4740771ba/">
          LinkedIn
        </Contacts>
        <Contacts href="https://github.com/Enzoskr">GitHub</Contacts>
        <Contacts>Correo</Contacts>
        <Contacts>Curriculum</Contacts>
      </ContactWrapper>
      <ContactBuild>2023 build with React.JSX</ContactBuild>
    </ContactContainer>
  );
};

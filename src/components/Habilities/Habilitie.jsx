import React from "react";
import { LanguageCard } from "./HabilitiesStyles";

const Habilitie = ({ img, title }) => {
  return (
    <LanguageCard>
      <img src={img} alt="proyecto" />
      <h3>{title}</h3>
    </LanguageCard>
  );
};

export default Habilitie;

import React from "react";
import { HabilitiesContainer, HabilitiesWrapper } from "./HabilitiesStyles";
import { Languages } from "../../data/language";
import Habilitie from "./Habilitie";

export const Habilities = () => {
  return (
    <HabilitiesWrapper>
      <h2>Habilidades</h2>
      <HabilitiesContainer>
        {Languages.map((language) => {
          return <Habilitie key={language.id} {...language} />;
        })}
      </HabilitiesContainer>
    </HabilitiesWrapper>
  );
};

export default Habilities;

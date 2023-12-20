import React from "react";
import { ProyectoCard } from "./ProjectsStyles";

const Proyecto = ({ img, title, desc, link }) => {
  return (
    <ProyectoCard>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </ProyectoCard>
  );
};

export default Proyecto;

import React from "react";
import { ProyectoCard } from "./ProjectsStyles";

const Proyecto = ({ img, title, desc, link }) => {
  return (
    <ProyectoCard>
      <a href={link}>
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>{desc}</p>
      </a>
    </ProyectoCard>
  );
};

export default Proyecto;

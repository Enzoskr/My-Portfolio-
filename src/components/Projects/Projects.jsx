import React from "react";
import { ProjectsContainer, ProjectsWrapper } from "./ProjectsStyles";
import { Proyectos } from "../../data/Proyects";
import Proyecto from "./Proyecto";

const Projects = () => {
  return (
    <ProjectsWrapper>
      <h2>Projects</h2>
      <ProjectsContainer>
        {Proyectos.map((Proyectos) => {
          return <Proyecto key={Proyectos.id} {...Proyectos} />;
        })}
      </ProjectsContainer>
    </ProjectsWrapper>
  );
};

export default Projects;

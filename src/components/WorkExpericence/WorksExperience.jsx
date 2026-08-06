import { WorkExperienceWrapper } from "./WorkExperienceStyles";
import { Trabajos } from "../../data/Jobs";
import WorkExperience from "./WorkExperience";

const WorksExperience = () => {
  return (
    <WorkExperienceWrapper>
      {Trabajos.map((trabajo) => {
        return <WorkExperience key={trabajo.id} {...trabajo} />;
      })}
    </WorkExperienceWrapper>
  );
};

export default WorksExperience;

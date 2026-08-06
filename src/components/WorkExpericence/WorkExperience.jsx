import {
  WorkExperienceContainer,
  WorkExperienceHeader,
  CompanyName,
  WorkExperienceList,
} from "./WorkExperienceStyles";

const WorkExperience = ({ title, company, duration, listdescription }) => {
  return (
    <WorkExperienceContainer>
      <WorkExperienceHeader>
        <h3>{title}</h3>
        <h5>{duration}</h5>
      </WorkExperienceHeader>

      <CompanyName>{company}</CompanyName>

      {listdescription && (
        <WorkExperienceList>
          {listdescription.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </WorkExperienceList>
      )}
    </WorkExperienceContainer>
  );
};

export default WorkExperience;

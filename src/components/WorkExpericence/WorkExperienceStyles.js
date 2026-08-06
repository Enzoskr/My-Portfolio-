import styled from "styled-components";

export const WorkExperienceWrapper = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 8px 0;
`;

export const WorkExperienceContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

export const WorkExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 4px 16px;

  h3 {
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
  }

  h5 {
    font-size: 0.9rem;
    font-weight: 400;
    color: #333;
    margin: 0;
    white-space: nowrap;
  }
`;

export const CompanyName = styled.h4`
  font-size: 0.95rem;
  font-weight: 400;
  font-style: italic;
  color: #333;
  margin: 0 0 6px 0;
`;

export const WorkExperienceList = styled.ul`
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 2px;

  li {
    list-style-type: square;
    color: #222;
    line-height: 1.4;
    font-size: 0.95rem;
  }

  li::marker {
    color: #222;
  }
`;

export const JobImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

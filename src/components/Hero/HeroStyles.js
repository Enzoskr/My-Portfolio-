import styled from "styled-components";

export const HeroContainer = styled.section`
  padding-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  gap: 4rem;
`;

export const HeroText = styled.div``;
export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  span {
    color: var(--rosa);
    font-weight: 700;
    font-size: 3rem;
  }
`;
export const HeroDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  color: var(--gris);
  max-width: 500px;
`;
export const HeroContact = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  color: var(--gris);
  max-width: 500px;
  font-weight: 600;
`;
export const HeroImg = styled.img`
  width: 450px;
  object-fit: cover;
  background-position: center;
`;

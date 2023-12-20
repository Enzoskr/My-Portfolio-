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

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  max-width: 500px;
`;
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
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 500;

  max-width: 500px;
`;
export const HeroContact = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
  gap: 10px;
  a {
    text-decoration: none;
    color: var(--gris-oscuro);
  }
`;
export const HeroImg = styled.img`
  width: 450px;
  object-fit: cover;
  background-position: center;
  @media screen and (max-width: 768px) {
    width: 400px;
    z-index: 1;
  }
`;

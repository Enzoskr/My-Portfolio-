import styled from "styled-components";

export const HeroContainer = styled.section`
  padding-top: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    gap: 0rem;
    flex-direction: column-reverse;
    padding-top: 30px;
    max-width: 100%;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  @media screen and (max-width: 1024px) {
    gap: 0.5rem;
    h1 {
      font-size: 24px;
    }
  }
  @media screen and (max-width: 425px) {
    padding: 0 20px;
  }
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
  @media screen and (max-width: 1024px) {
    .p {
      font-size: 18px;
    }
  }
`;
export const HeroDescription = styled.p`
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 500;
  max-width: 420px;
  @media screen and (max-width: 768px) {
    max-width: 400px;
  }
`;
export const HeroContact = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  /* @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  } */
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
  width: 400px;
  height: 400px;
  object-fit: cover;
  background-position: center;
  border-radius: 60%;
  border: 2px solid var(--rosa);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1024px) {
    width: 320px;
    height: 320px;
  }

  @media screen and (max-width: 425px) {
    width: 300px;
    height: 300px;
  }
`;

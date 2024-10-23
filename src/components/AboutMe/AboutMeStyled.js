import styled from "styled-components";

export const AboutMeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 20px;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;

  @media screen and (max-width: 768px) {
    text-align: start;
  }
`;

export const AboutMeStyled = styled.div`
  margin: 0 auto;
`;

export const AboutMeContainer = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

export const AboutMeCard = styled.div`
  background-color: #fff;
  width: 250px;
  background-color: var(--naranja);
  color: white;
  text-align: center;
  font-size: 1.5rem;
  padding: 12px;
  border-radius: 12px;
  font-size: 1.2rem;

  img {
    width: 100px;
    border-radius: 50%;
    margin: 10px auto;
    display: block;
  }
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 300px;
    font-size: 1rem;
    gap: 2px;
  }
`;

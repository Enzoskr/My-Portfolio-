import styled from "styled-components";

export const AboutMeStyled = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

export const AboutMeContainer = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;

  img {
    width: 100px;
    border-radius: 50%;
    margin: 10px auto;
    display: block;
  }
`;

export const AboutMeCard = styled.div`
  background-color: #fff;
  width: 250px;
  background-color: var(--naranja);
  color: white;
  text-align: center;
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 12px;
`;

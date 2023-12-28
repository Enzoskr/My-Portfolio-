import styled from "styled-components";

export const HabilitiesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 50px;
  @media screen and (max-width: 768px) {
    padding-top: 30px;
    text-align: start;
  }
`;
export const HabilitiesContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

export const LanguageCard = styled.div`
  border: 1px solid black;
  width: 140px;
  height: 120px;
  background-color: white;
  color: black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 0.5rem;
  transition: 0.5s ease-in-out;
  border-radius: 15px;
  cursor: pointer;
  h3 {
    font-size: 14px;
  }
  &:hover {
    transform: scale(1.03);
  }
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
  img {
    width: 50px;
    height: 50%;
    object-fit: contain;
  }
`;

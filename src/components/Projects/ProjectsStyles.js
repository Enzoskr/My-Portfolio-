import styled from "styled-components";

export const ProjectsWrapper = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 90px;
  @media screen and (max-width: 768px) {
    padding-top: 30px;
    text-align: start;
  }
`;
export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 768px) {
    gap: 40px;
  }
`;

export const ProyectoCard = styled.div`
  a {
    list-style: none;
  }
  width: 300px;
  height: 300px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  p {
    padding: 10px;
  }
  h3 {
    padding-left: 10px;
  }
`;

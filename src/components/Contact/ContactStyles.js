import styled from "styled-components";

export const ContactTitle = styled.h2`
  color: var(--blanco);
  font-weight: 600;
  padding-left: 2.5rem;
`;

export const ContactContainer = styled.footer`
  background-color: var(--gris-oscuro);

  margin: 0 auto;
  color: var(--text-color-white);
`;

export const ContactWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Contacts = styled.a`
  color: var(--blanco);
  list-style: none;
  text-decoration: none;
`;

export const ContactBuild = styled.div`
  color: var(--blanco);
  font-size: 12px;
  padding: 1rem 0;
  padding-left: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

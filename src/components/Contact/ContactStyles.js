import styled from "styled-components";

export const ContactTitle = styled.h2`
  color: var(--blanco);
  font-size: 1.5rem;
  font-weight: 500;
  padding-left: 2.5rem;
`;

export const ContactContainer = styled.section`
  background-color: var(--gris-oscuro);
  width: 100%;
  margin: 0 auto;
  color: var(--text-color-white);
`;

export const ContactWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
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

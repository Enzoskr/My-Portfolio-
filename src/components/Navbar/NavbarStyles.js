import styled from "styled-components";

export const NavbarContainer = styled.header`
  top: 0;
  z-index: 100;
`;

export const NavbarUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 1rem;
  border-right: 1px solid var(--black);
  border-left: 1px solid var(--black);

  max-width: 1300px;
  margin: 0 auto;
  margin-top: 1rem;
`;
export const NavbarLi = styled.li`
  color: var(--black);
  font-size: 20px;
  list-style: none;
  cursor: pointer;
  @media screen and (max-width: 425px) {
    font-size: 16px;
    list-style: none;
  }
`;

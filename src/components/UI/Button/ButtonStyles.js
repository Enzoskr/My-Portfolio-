import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
  border-radius: ${({ radius }) => `${radius}px`};
  display: inline-block;
  padding: 10px 20px;
  background-color: ${({ primary }) =>
    primary ? "var(--naranja)" : "var(--rosa)"};
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border: 2px solid #000000;
  transition: background-color 0.3s ease, transform 0.2s ease;
  transition: box-shadow 0.2s ease, transform 0.1s ease;

  :hover {
    box-shadow: 3px 3px 0 #000000;
    background-color: #d64b2b;
  }
`;

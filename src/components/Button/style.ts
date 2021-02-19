import styled from "styled-components";
import { shade } from "polished";

export const Button = styled.button`
  background: #ff9000;
  border: 0;
  border-radius: 10px;
  color: #312e38;
  font-family: "Roboto Slab";
  font-weight: 500;
  height: 56px;
  padding: 0 16px;
  transition: 0.2s ease-in-out all;
  width: 100%;

  &:hover {
    background: ${shade(0.2, "#ff9000")};
  }
`;

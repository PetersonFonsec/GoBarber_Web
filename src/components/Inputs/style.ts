import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 14px;
  }

  svg {
    color: #666360;
    left: 16px;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Input = styled.input`
  background: #231229;
  border: 2px solid #231229;
  border-radius: 10px;
  color: #ffffff;
  font-family: "Roboto Slab";
  padding: 16px;
  padding-left: 52px;
  width: 100%;

  &::placeholder {
    color: #666360;
  }

  &,
  svg {
    transition: 0.2s ease-in-out all;
  }

  &:focus {
    border-color: #ff9000;
  }

  &:not(:placeholder-shown) ~ svg,
  &:focus ~ svg {
    color: #ff9000;
  }
`;

import styled, { css } from "styled-components";
import Tooltip from "../Tooltip/";
interface InputProps {
  isError?: boolean;
}

export const Container = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 14px;
  }

  > svg {
    color: #666360;
    left: 16px;
    pointer-events: none;
    position: absolute;
    top: 28px;
    transform: translateY(-50%);
  }
`;

export const Input = styled.input<InputProps>`
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

  ${({ isError }) =>
    isError &&
    css`
      border-color: #c53030;
      padding-right: 38px;
    `}
`;

export const Error = styled(Tooltip)`
  align-items: center;
  color: #666360;
  display: flex;
  justify-content: center;
  right: 16px;
  position: absolute;
  top: 28px;
  transform: translateY(-50%);

  span {
    background-color: #c53030;
    border-color: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

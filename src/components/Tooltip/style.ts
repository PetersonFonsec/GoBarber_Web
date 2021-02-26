import styled from "styled-components";

export const Container = styled.div`
  &:hover span {
    bottom: calc(100% + 12px);
    opacity: 1;
  }

  span {
    background: #ff9000;
    border-radius: 4px;
    bottom: 0;
    font-size: 14px;
    font-weight: 500;
    left: 50%;
    opacity: 0;
    padding: 8px;
    position: absolute;
    pointer-events: none;
    transition: 0.3s ease-in-out all;
    transform: translateX(-50%);
    width: 160px;

    &::before {
      content: "";
      border-color: #ff9000 transparent;
      border-style: solid;
      border-width: 6px 6px 0 6px;
      left: 50%;
      position: absolute;
      top: 100%;
      transform: translateX(-50%);
    }
  }
`;

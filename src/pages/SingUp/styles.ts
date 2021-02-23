import styled from "styled-components";
import BackgroundImage from "../../assets/sign-up-background.png";
import { shade } from "polished";

export const Wrapper = styled.section`
  align-items: stretch;
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  place-content: center;
  width: 100%;

  form {
    margin: 80px 0;
    width: 240px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      transition: 0.2s ease-in-out all;
      text-align: center;

      &:hover {
        color: ${shade(0.2, "#f4ede8")};
      }
    }
  }

  a {
    align-items: center;
    color: #ff9000;
    display: flex;
    margin-top: 24px;
    transition: 0.2s ease-in-out all;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, "#f4ede8")};
    }
  }
`;

export const Background = styled.div`
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  flex: 1;
`;

import styled from "styled-components";

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: calc(100dvh - 64px);

  padding: 32px;

  h1 {
    font-size: 16rem;
    font-weight: 900;
    color: #1d1d1d;
    line-height: 1;

    transition: font-size 0.2s ease-out;

    span {
      color: #e16919;
      transition: font-size 0.2s ease-out;
    }
  }

  p {
    font-size: 1rem;
    font-weight: 600;
    color: #1d1d1d;
  }

  button {
    margin-top: 1rem;
  }
`;

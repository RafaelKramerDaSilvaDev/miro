import styled from "styled-components";

export const Button = styled.button`
  padding: 0.8rem 2rem;
  background-color: #e16919;
  border: none;
  outline: none;

  border-radius: 8px;

  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;

  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    filter: brightness(90%);
  }
`;

import styled from "styled-components";

export const Container = styled.button`
  height: 5rem;
  padding: 0 2rem;

  background-color: #00297f;
  color: #fff;

  font-size: 1.6rem;
  font-weight: 700;

  border: 0;
  border-radius: 5px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.3);
  }
`;

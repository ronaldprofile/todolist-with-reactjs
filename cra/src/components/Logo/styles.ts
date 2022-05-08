import styled from "styled-components";

export const Container = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--white);

  span {
    font-size: 2rem;
    color: var(--green);
  }

  @media (max-width: 360px) {
    font-size: 1.6rem;
  }
`;

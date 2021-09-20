import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  strong {
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--white);
  }

  @media (max-width: 360px) {
    strong {
      font-size: 1.4rem;
    }
  }
`;

export const Image = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  clip-path: circle();
  cursor: pointer;
`;

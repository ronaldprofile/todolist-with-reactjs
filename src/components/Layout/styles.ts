import styled from "styled-components";

export const Header = styled.header`
  min-height: 14rem;
  background-color: #00004f;
`;

export const Container = styled.div`
  max-width: 920px;
  margin: -10rem auto 0;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 320px) and (max-width: 1023px) {
    max-width: 90%;
  }
`;

export const Heading = styled.div`
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Todos = styled.div`
  margin-top: 6rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

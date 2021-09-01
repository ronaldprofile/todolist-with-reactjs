import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  min-height: 14rem;
  background-color: #00004f;
`;

export const Container = styled.div`
  max-width: 920px;
  margin: 0 auto;

  @media (max-width: 767px) {
    max-width: 90%;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 90%;
  }
`;

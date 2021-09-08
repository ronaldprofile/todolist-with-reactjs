import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  margin: 0 auto;
  background-color: #121214;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.4rem;
  text-align: center;
`;

export const Content = styled.div`
  padding: 6.4rem 3.2rem;
  background: #202024;

  border-radius: 5px;

  button {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

export const InviteCard = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-top: 1.2rem;
  font-size: 5.4rem;
  line-height: 6.4rem;

  color: #e1e1e6;
`;

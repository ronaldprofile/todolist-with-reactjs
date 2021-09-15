import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";

import iconGoogleGradient from "../../images/icon-google-gradient.svg";

import { Container, Wrapper, Header, Main, Title } from "./styles";

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function signInPlatform() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("app/dashboard");
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Header>
            <Logo />
            <Button onClick={signInPlatform}>
              <img src={iconGoogleGradient} alt="icon google" />
              Criar conta com google
            </Button>
          </Header>

          <Main>
            <Title>
              <span>Pense.</span>
              <span>Crie.</span>
              <span>Execute.</span>
            </Title>
          </Main>
        </Wrapper>
      </Container>
    </>
  );
}

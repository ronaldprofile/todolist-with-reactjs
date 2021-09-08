import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import { Logo } from "../Logo";
import { Button } from "../Button";

import iconGoogleGradient from "../../images/icon-google-gradient.svg";

import { Container, Content, InviteCard, Title } from "./styles";

export function Login() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function signInPlatform() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/dashboard");
  }

  return (
    <Container>
      <InviteCard>
        <Logo />
        <Title>Faça seu login na plataforma</Title>
      </InviteCard>
      <Content>
        <Button onClick={signInPlatform}>
          <img src={iconGoogleGradient} alt="icon google" />
          Crie sua conta com o google
        </Button>
      </Content>
    </Container>
  );
}

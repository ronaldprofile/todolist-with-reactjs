import { Container } from "./styles";

import illustrationAstronaut from "../../images/astronaut.svg";

export function NoTodos() {
  return (
    <Container>
      <img src={illustrationAstronaut} alt="astronaut illustration" />
      <p>
        Nenhuma tarefa por aqui...
        <br />
        comece adicionando sua primeira tarefa.
      </p>
    </Container>
  );
}

import { ReactNode } from "react";
import { Container } from "./styles";

interface ITodosProps {
  children: ReactNode;
}

export function Todos({ children }: ITodosProps) {
  return <Container>{children}</Container>;
}

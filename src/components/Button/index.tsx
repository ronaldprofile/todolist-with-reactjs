import { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...rest }: IButtonProps) {
  return <Container {...rest}>{children}</Container>;
}

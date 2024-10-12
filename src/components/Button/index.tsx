import { HTMLAttributes } from "react";
import * as S from "./styles";
type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export const Button = ({ ...props }: ButtonProps) => {
  return <S.Button {...props} />;
};

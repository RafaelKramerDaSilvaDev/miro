import { ReactNode } from "react";
import * as S from "./styles";

type BaseTemplateProps = {
  children: ReactNode;
};

export const BaseTemplate = ({ children }: BaseTemplateProps) => {
  return <S.Content>{children}</S.Content>;
};

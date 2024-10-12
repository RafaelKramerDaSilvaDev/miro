import { forwardRef } from "react";
import { Tldraw as TldrawComponent } from "tldraw";
import "tldraw/tldraw.css";
import * as S from "./styles";

export const Tldraw = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <S.Container ref={ref}>
      <TldrawComponent persistenceKey="miro" />
    </S.Container>
  );
});

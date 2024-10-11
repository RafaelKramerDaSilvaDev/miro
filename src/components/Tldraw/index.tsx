import "tldraw/tldraw.css";

import { Tldraw as TldrawComponent } from "tldraw";
import * as S from "./styles";

export const Tldraw = () => {
  return (
    <S.Container>
      <TldrawComponent persistenceKey="miro" />
    </S.Container>
  );
};

import * as S from "./AppStyles";
import { BaseTemplate } from "./components/BaseTemplate";
import { Button } from "./components/Button";
import { Tldraw } from "./components/Tldraw";
import { useScroll } from "./hooks/useScroll";
import { GlobalStyles } from "./styles/global-styles";

export const App = () => {
  const { elementRef, scrollToElement } = useScroll();

  return (
    <>
      <GlobalStyles />

      <BaseTemplate>
        <S.Hero>
          <h1>
            <span>M</span>iro
          </h1>
          <p>@m8sistemas</p>

          <Button onClick={() => scrollToElement({ behavior: "smooth" })}>
            Começar
          </Button>
        </S.Hero>

        <Tldraw ref={elementRef} />
      </BaseTemplate>
    </>
  );
};

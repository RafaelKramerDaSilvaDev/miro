import { BaseTemplate } from "./components/BaseTemplate";
import { Tldraw } from "./components/Tldraw";
import { GlobalStyles } from "./styles/global-styles";

export const App = () => {
  return (
    <BaseTemplate>
      <GlobalStyles />
      <Tldraw />
    </BaseTemplate>
  );
};

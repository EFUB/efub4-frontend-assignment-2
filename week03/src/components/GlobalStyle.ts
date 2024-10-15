import { createGlobalStyle } from "styled-components";

type StateType = {
  isLightMode: boolean;
};

const GlobalStyle = createGlobalStyle`
  :root {
    /* color */
    --background: ${({ isLightMode }: StateType) => (isLightMode ? "#fff" : "#09090a")};
    --maingrey: ${({ isLightMode }: StateType) => (isLightMode ? "#84868d" : "#141517")};
    --subgrey: ${({ isLightMode }: StateType) => (isLightMode ? "#141517" : "#84868d")};
    --font: ${({ isLightMode }: StateType) => (isLightMode ? "#09090a" : "#fff")};
    --main: #f6285c;
    --beforeShadow: ${({ isLightMode }: StateType) =>
      isLightMode
        ? "linear-gradient(90deg, #fff 5%, rgba(255, 255, 255, 0.7) 30%, rgba(255, 255, 255, 0.45) 50%, rgba(255, 255, 255, 0.2) 80%, rgba(255, 255, 255, 0) 100%)"
        : "linear-gradient(90deg, #09090a 5%, rgba(9, 9, 10, 0.7) 30%, rgba(9, 9, 10, 0.45) 50%, rgba(9, 9, 10, 0.2) 80%, rgba(9, 9, 10, 0) 100%)"};
    --afterShadow: ${({ isLightMode }: StateType) =>
      isLightMode
        ? "linear-gradient(0deg, #fff 14%, rgba(255, 255, 255, 0.9) 32%, rgba(255, 255, 255, 0.8) 45%, rgba(255, 255, 255, 0.45) 70%, rgba(255, 255, 255, 0) 100%)"
        : "linear-gradient(0deg, #09090a 14%, rgba(9, 9, 10, 0.9) 32%, rgba(9, 9, 10, 0.8) 45%, rgba(9, 9, 10, 0.45) 70%, rgba(9, 9, 10, 0) 100%)"};
  }
  `;

export default GlobalStyle;

import { createGlobalStyle, css } from "styled-components";

const styles = css`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  body {
    background-color: yellow;
  }
`;

const GlobalStyles = createGlobalStyle`
    ${styles}
`;

export default GlobalStyles;

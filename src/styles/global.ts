import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.primary};
  }

  body, input, button, textarea {
    font: 400 16px 'Archivo', sans-serif;
  }
`;

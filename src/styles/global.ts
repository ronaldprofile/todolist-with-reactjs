import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    height: 100vh;
    background-color: #fafafa;
  }
  
  body, input, button {
    font-family: "Roboto", sans-serif;
  }

  input, button {
    height: 5rem;
    padding: 0 2rem;
    font-size: 1.6rem;
    border-radius: 5px;
  }

  button {
    cursor: pointer;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;

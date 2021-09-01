import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  :root {
    --todo-in-progress: rgba(232, 248, 232, 1);
    --green-rgba: rgba(54, 178, 54, 1);

    --todo-completed:  rgba(250, 236, 235, 1);
    --red-rgba:  rgba(235, 59, 53, 1);
  }
  
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

  input {
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

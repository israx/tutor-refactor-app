import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
    --red: #E2405A;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #b4bcc6;
    --grey: #efefef;
    --blue: #153154;
    --background: #E7F2F7;

}
html{
    font-size: 15px;
}
body{
    margin: 0;
    padding: 0;
    background: var(--background);
}

button{
    --cast: 2px;
    padding: 0.2em 0.5em;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 3px;
    box-shadow: var(--cast) var(--cast) var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover{
        --cast: 4px;
    }
}
img {
    max-width: 100%;
  }


`;

export default GlobalStyles;

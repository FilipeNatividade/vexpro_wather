import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    button,input{
        border: none;
        overflow: none;
    }
    button{
        background-color: transparent;
        cursor: pointer;
    }
    .app{
        align-items: center;
        display: flex;
        flex-direction: column;
    }
`
export default GlobalStyle
/* eslint-disable max-len */
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;
        font-size: 12px;
        background-color: rgba(20,20,20,1);
        color: white;
        padding-top: 60px;
    }
`;

export default globalStyles;

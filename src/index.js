import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import App from "./App";

const GlobalStyle = createGlobalStyle`
    ${normalize}
    body {
        font-family: "PT Sans Narrow", Arial, sans-serif;
        font-weight: 400;
        font-size: 16px;
        margin: 0;
    }

    body,
    body > div {
        min-height: 100vh;
    }

    html {
        height: 100vh;
    }

    .page[data-size="A4"] {
        width: 210mm;
        height: 296mm;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    @media print {
        body,
        .page {
            margin: 0;
            box-shadow: 0;
        }

        .fa-print,
        .fa-arrow-left {
            display: none;
        }
    }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

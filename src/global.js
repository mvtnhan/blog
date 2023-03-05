import { css } from "styled-components";

export const global = css`
  body {
    font-family: "PT Sans Narrow", Arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin: 0;
  }

  html,
  body,
  body > div {
    // min-height: 100vh;
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

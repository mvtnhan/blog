import React from "react";
import styled from "styled-components";

import { Avatar } from "./avatar.js";

export function Header() {
  return (
    <StyledHeader>
      <Avatar />
      <div className="TitleName">
        <h1>Mai Vuong Trong Nhan</h1>
        <div>
          <h2>Frontend Engineer</h2>
          <p />
        </div>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  width: fit-content;
  height: 278px;
  display: flex;
  width: 100%;

  .TitleName {
    width: 55%;
    justify-content: center;
    display: flex;
    display: flex;
    flex-direction: column;
    background-color: #ececec;

    > div,
    h1 {
      padding-left: 24px;
    }

    h1 {
      margin: 0;
      color: #3c3c3c;
      font-size: 48px;
    }

    > div {
      display: flex;

      h2 {
        letter-spacing: 3px;
        font-weight: 400;
        text-transform: uppercase;
      }

      p {
        height: 16px;
        display: block;
        content: "";
        background-color: #405361;
      }
    }
  }
`;

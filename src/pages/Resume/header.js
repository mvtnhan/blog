import React from "react";
import styled from "styled-components";

import { Avatar } from "./avatar.js";

export function Header(props) {
  return (
    <StyledHeader className="Header">
      <div className="AvatarWrapper LeftColumn">
        <Avatar />
      </div>
      <div className="TitleName RightColumn">
        <h1 className="Name">Mai Vuong Trong Nhan</h1>
        <h1 className="NameResponsive">Nhan Mai</h1>
        <div>
          <h2>Frontend Engineer</h2>
          <p />
        </div>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  height: 278px;
  width: 100%;
  align-items: center;

  .LeftColumn {
    height: 198px;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      height: 150px;
      width: 150px;
    }
  }

  .TitleName {
    height: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;

    > div,
    h1 {
      padding-left: 24px;
    }

    .Name,
    .NameResponsive {
      margin: 0;
      color: #3c3c3c;
      font-size: 48px;
    }

    .NameResponsive {
      display: none;
    }

    > div {
      display: flex;
      align-items: center;

      h2 {
        letter-spacing: 3px;
        font-weight: 400;
        text-transform: uppercase;
      }

      p {
        width: 138px;
        height: 16px;
        display: block;
        content: "";
        margin-left: 8px;
        background-color: #405361;
      }
    }
  }
`;

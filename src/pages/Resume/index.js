import React from "react";
import styled from "styled-components";

import { LeftColumn } from "./left-column.js";
import { RightColumn } from "./right-column.js";

import imgMainBg from "./images/main-bg.png";
import { Header } from "./header.js";
import imgLeftBg from "./images/left-bg.png";

function PrintFpt() {
  window.print();
}

export default function Resume() {
  return (
    <Wrapper>
      <i className="fa fa-print" onClick={PrintFpt} />
      <div className="page" data-size="A4">
        <Header />
        <div className="Content">
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: url(${imgMainBg}) repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;

  .fa-print {
    position: absolute;
    top: 8px;
    color: #d6d6d6;
    right: 8px;
    font-size: 48px;

    :hover {
      cursor: pointer;
    }
  }

  @media (max-height: 297mm) {
    height: auto;
  }

  .page[data-size="A4"] {
    background: url(${imgLeftBg}) repeat;
    border: 8px solid white;
    border-radius: 4px;
    margin: 24px 0;

    .Header {
      height: 72mm;
    }

    .Content {
      height: 224mm; /*297-72*/
    }

    @media print {
      border: none;
      margin: 0;
    }
  }

  .Content {
    display: flex;
    justify-content: space-between;
  }

  .TitleName,
  .AvatarWrapper,
  .Content .RightColumn {
    background-color: #ececec;
  }

  .LeftColumn {
    flex: 3;
  }

  .RightColumn {
    flex: 4;
    .BlockWrapper {
      padding-right: 24px;
      margin-left: 24px;

      .BlockContentRight {
        margin-left: -24px;
      }
    }
  }

  @media screen and (max-width: 210mm) {
    background: none;
    padding: 0;

    height: auto;

    .page[data-size="A4"] {
      margin: 0;
    }

    .RightColumn {
      padding: 0;
      .BlockWrapper,
      .BlockWrapper .BlockContentRight {
        margin-left: 0;
      }

      .Skill {
        padding: 24px;
      }
    }

    .TitleName,
    .AvatarWrapper {
      background-color: transparent;
    }

    .Header,
    .Content {
      flex-direction: column;
    }
  }
`;

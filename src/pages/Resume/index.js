import React from "react";
import styled from "styled-components";

import { Header } from "./header.js";
import { LeftColumn } from "./left-column.js";
import { RightColumn } from "./right-column.js";

import imgLeftBg from "./images/left-bg.png";
import imgMainBg from "./images/main-bg.png";

function Back() {
  window.history.back();
}

function PrintFpt() {
  window.print();
}

export default function Resume() {
  return (
    <Wrapper>
      <i className="fa fa-arrow-left" onClick={Back} />
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

  .fa-print,
  .fa-arrow-left {
    position: absolute;
    color: #d6d6d6;
    font-size: 24px;

    :hover {
      cursor: pointer;
    }
  }

  .fa-print {
    top: 16px;
    right: 16px;
  }

  .fa-arrow-left {
    top: 16px;
    left: 16px;
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

    .fa-print,
    .fa-arrow-left {
      display: none;
    }

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

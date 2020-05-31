import React from "react";
import styled from "styled-components";

import { LeftColumn } from "./left-column.js";
import { RightColumn } from "./right-column.js";

import imgMainBg from "./images/main-bg.png";
import { Header } from "./header.js";
import imgLeftBg from "./images/left-bg.png";

export default function Resume() {
  return (
    <Wrapper>
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
  height: 100%;
  padding-top: 48px;
  padding-bottom: 48px;

  .page[data-size="A4"] {
    background: url(${imgLeftBg}) repeat;
    border: 8px solid white;
    border-radius: 4px;

    .Header {
      height: 72mm;
    }

    .Content {
      height: 225mm; /*297-72*/
    }

    @media print {
      border: none;
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
    padding: 0 24px;
  }

  @media (max-width: 800px) {
    background: none;
    padding: 0;

    .page[data-size="A4"] {
      height: 100%;
      padding-top: 24px;
    }

    .RightColumn {
      padding: 0;

      .Skill {
        padding: 0 48px 24px;
      }
    }

    .TitleName,
    .AvatarWrapper {
      background-color: transparent;
    }

    .Header,
    .Content {
      flex-direction: column;
      height: 100% !important;
    }
  }

  @media (max-width: 490px) {
    .TitleName {
      h1 {
        font-size: 40px;
      }

      > div {
        p {
          width: 0 !important;
        }
      }
    }
  }
`;

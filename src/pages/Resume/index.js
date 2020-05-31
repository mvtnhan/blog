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
        <LeftColumn />
        <RightColumn />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: url(${imgMainBg}) repeat;
  display: flex;
  justify-content: center;
  height: 100%;

  .page[data-size="A4"] {
    /* background: url(${imgLeftBg}) repeat; */
    display: flex;
    /* border: 8px solid white;
    border-radius: 4px;
    flex-wrap: wrap; */
  }
`;

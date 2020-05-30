import React from "react";
import styled from "styled-components";

import { LeftColumn } from "./left-column.js";
import { RightColumn } from "./right-column.js";

import imgMainBg from "./images/main-bg.png";

export default function Resume() {
  return (
    <Wrapper>
      <Paper>
        <LeftColumn />
        <RightColumn />
      </Paper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: url(${imgMainBg}) repeat;
  display: flex;
  justify-content: center;
  height: 100%;
`;

const Paper = styled.div`
  background-color: #ececec;
  margin: 48px 0;
  display: flex;
  width: 8.3in;
  height: 11.7in;
  border: 8px solid white;
  border-radius: 4px;
`;

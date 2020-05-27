import React from "react";

import { ResumeLeft } from "./resumeLeft.js";
import { ResumeRight } from "./resumeRight.js";
import styled from "styled-components";

export default function Resume() {
  return (
    <Wrapper>
      <Paper>
        <ResumeLeft />
        <ResumeRight />
      </Paper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
`;

const Paper = styled.div`
  background-color: #f0f0f0;
  margin: 48px 0;
  display: flex;
  width: 8.3in;
  height: 11.7in;
`;

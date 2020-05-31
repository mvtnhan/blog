import React from "react";
import styled from "styled-components";

import { AboutMe } from "./about-me.js";
import { Projects } from "./projects.js";
import { Skills } from "./skills.js";

export function RightColumn() {
  return (
    <StyledRightColumn>
      <AboutMe />
      <Projects />
      <Skills />
    </StyledRightColumn>
  );
}

const StyledRightColumn = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  background-color: #ececec;
`;

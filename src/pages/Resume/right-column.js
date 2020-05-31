import React from "react";
import styled from "styled-components";

import { AboutMe } from "./about-me.js";
import { Projects } from "./projects.js";
import { Skills } from "./skills.js";

export function RightColumn() {
  return (
    <StyledRightColumn className="RightColumn">
      <AboutMe />
      <Projects />
      <Skills className="Skill" />
    </StyledRightColumn>
  );
}

const StyledRightColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

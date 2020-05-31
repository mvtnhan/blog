import React from "react";
import styled from "styled-components";

import { AboutMe } from "./about-me.js";
import { Projects } from "./projects.js";
import { Skills } from "./skills.js";

export function RightColumn() {
  return (
    <StyledRightColumn className="RightColumn">
      <div className="BlockWrapper">
        <AboutMe />
        <Projects />
        <Skills className="Skill" />
      </div>
    </StyledRightColumn>
  );
}

const StyledRightColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

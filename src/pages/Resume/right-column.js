import React from "react";
import styled from "styled-components";

import WorkExperience from "./work-experience.js";
import Projects from "./projects.js";
import Skills from "./skills.js";

export default function RightColumn() {
  return (
    <StyledRightColumn className="RightColumn">
      <div className="BlockWrapper">
        <WorkExperience />
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

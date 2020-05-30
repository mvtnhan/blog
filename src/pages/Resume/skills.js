import React from "react";
import styled from "styled-components";

import BlockHeader from "./block-header";
import CircularProgressBar from "./circular-progress-bar.js";

export function Skills() {
  return (
    <StyledSkills>
      <BlockHeader title="Skills" />
      <ListSkills>
        <CircularProgressBar percentEnd={70} duration={1.5}>
          CSS
        </CircularProgressBar>
        <CircularProgressBar percentEnd={40} duration={1.8}>
          JS
        </CircularProgressBar>
        <CircularProgressBar percentEnd={50} duration={1.9}>
          GIT
        </CircularProgressBar>
        <CircularProgressBar percentEnd={40} duration={1.8}>
          REACT
        </CircularProgressBar>
      </ListSkills>
    </StyledSkills>
  );
}

const StyledSkills = styled.div``;

const ListSkills = styled.div`
  justify-content: space-between;
  display: flex;
  margin-top: 40px;
`;

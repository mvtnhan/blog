import React from "react";
import styled from "styled-components";

import BlockHeader from "./block-header";
import CircularProgressBar from "../../components/circular-progress-bar.js";

export function Skills() {
  return (
    <div>
      <BlockHeader title="Skills" />
      <ListSkills>
        <StyledCircularProgressBar percentEnd={70} duration={2}>
          CSS
        </StyledCircularProgressBar>
        <StyledCircularProgressBar percentEnd={40} duration={1.3}>
          JS
        </StyledCircularProgressBar>
        <StyledCircularProgressBar percentEnd={50} duration={1.5}>
          GIT
        </StyledCircularProgressBar>
        <StyledCircularProgressBar percentEnd={40} duration={1.3}>
          REACT
        </StyledCircularProgressBar>
      </ListSkills>
    </div>
  );
}

const StyledCircularProgressBar = styled(CircularProgressBar)`
  width: 88px;
`;

const ListSkills = styled.div`
  justify-content: space-between;
  display: flex;
  margin-top: 40px;
`;

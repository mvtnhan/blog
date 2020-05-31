import React from "react";
import styled from "styled-components";

import BlockHeader from "./block-header.js";

import CircularProgressBar from "../../components/circular-progress-bar.js";

export function Skills(props) {
  return (
    <div>
      <BlockHeader title="Skills" />
      <ListSkills className={props.className}>
        <StyledCircularProgressBar percentEnd={70} duration={3}>
          CSS
        </StyledCircularProgressBar>
        <StyledCircularProgressBar percentEnd={50} duration={1.8}>
          JS
        </StyledCircularProgressBar>
        <StyledCircularProgressBar percentEnd={50} duration={2}>
          GIT
        </StyledCircularProgressBar>
        <StyledCircularProgressBar percentEnd={40} duration={1.5}>
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

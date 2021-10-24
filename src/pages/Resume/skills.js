import React from "react";
import styled from "styled-components";

import BlockContent from "./block-content";
import BlockHeader from "./block-header.js";
import CircularProgressBar from "../../components/circular-progress-bar.js";

export default function Skills(props) {
  return (
    <div>
      <BlockHeader title="Skills" />
      <BlockContent className="BlockContentRight">
        <SkillDescription>
          <h3>Technical Skills</h3>
          <ul>
            {/* <li>
              ReactJS, Redux, React Hooks, Fromik & Yup, Javascript (ES6), CSS
              (SCSS).
            </li> */}
            <li>
              ReactJS, React Hooks, Custom-hooks, Javascript (ES6), CSS (SCSS).
            </li>
            <li>Git, Photoshop.</li>
            <li>Good at converting PSD to responsive HTML and CSS.</li>
          </ul>
          <h3>Soft Skills</h3>
          <ul>
            <li>Good at communication skills and teamwork.</li>
            <li>Ability to learn and understand quickly.</li>
            <li>Ability to work in a team or independently.</li>
          </ul>
        </SkillDescription>
      </BlockContent>
      <SkillAnimation className={props.className}>
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
      </SkillAnimation>
    </div>
  );
}

const StyledCircularProgressBar = styled(CircularProgressBar)`
  width: 64px;
  /* margin-top: -16px; */
  @media screen and (max-width: 450px) {
    margin: 0 16px 16px;
  }
`;

const SkillDescription = styled.div`
  h3 {
    margin: 16px 0 8px;
    color: #405361;

    &:first-child {
      margin-top: 0;
    }
  }
  ul {
    margin: 0;

    li {
      list-style-type: disc;
      margin: 0 0 2px 24px;
    }
  }
`;

const SkillAnimation = styled.div`
  justify-content: space-evenly;
  display: flex;
  padding-top: 24px;
`;

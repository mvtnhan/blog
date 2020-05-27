import React from "react";
import styled from "styled-components";
import { AboutMe } from "./aboutMe.js";
import { WorkExperience } from "./workExperience.js";

export function ResumeRight() {
  return (
    <Right>
      <div className="name">
        <h1>MAI VUONG TRONG NHAN</h1>
        <p>FRONTEND DEVELOPER</p>
      </div>
      <AboutMe />
      <WorkExperience />
    </Right>
  );
}

const Right = styled.div`
  width: 55%;
  display: flex;
  margin-right: 56px;
  flex-direction: column;

  .name {
    height: 20%;
    margin: 48px 0;
  }
`;

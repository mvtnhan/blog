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
    flex-direction: column;
    height: 16%;
    margin: 40px 0;
    justify-content: center;
    display: flex;

    h1,
    p {
      margin: 0;
      letter-spacing: 2px;
    }

    h1 {
      font-size: 36px;
    }

    p {
      font-size: 20px;
    }
  }
`;

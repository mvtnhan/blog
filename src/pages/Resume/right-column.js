import React from "react";
import styled from "styled-components";

import { AboutMe } from "./about-me.js";
import { Projects } from "./projects.js";
import { Skills } from "./skills.js";

export function RightColumn() {
  return (
    <StyledRightColumn>
      <div className="MyInfo">
        <h1>Mai Vuong Trong Nhan</h1>
        <div>
          <h2>Frontend Engineer</h2>
          <p />
        </div>
      </div>
      <AboutMe />
      <Projects />
      <Skills />
    </StyledRightColumn>
  );
}

const StyledRightColumn = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  margin-right: 24px;

  .MyInfo {
    width: fit-content;
    height: 278px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      margin: 0;
      color: #3c3c3c;
      font-size: 48px;
    }

    > div {
      display: flex;
      align-items: center;

      h2 {
        letter-spacing: 3px;
        font-weight: 400;
        width: 70%;
        text-transform: uppercase;
      }

      p {
        width: 40%;
        height: 16px;
        display: block;
        content: "";
        background-color: #405361;
      }
    }
  }
`;

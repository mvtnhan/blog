import React from "react";
import styled from "styled-components";
import { Avatar } from "./avatar.js";
import { ContactMe } from "./contact-me.js";
import { Education } from "./education.js";
import imgLeftBg from "./images/left-bg.png";
import { ProSkill } from "./pro-skill.js";

export function LeftColumn() {
  return (
    <StyledLeftColumn>
      <Avatar />
      <div className="BlockWrapper">
        <ContactMe />
        <Education />
        <ProSkill />
      </div>
    </StyledLeftColumn>
  );
}

const StyledLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin-right: 24px;
  background: url(${imgLeftBg}) repeat;

  .BlockWrapper {
    padding-right: 24px;
  }
`;

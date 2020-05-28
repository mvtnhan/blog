import React from "react";
import styled from "styled-components";

import { Avatar } from "./avatar.js";
import { ContactMe } from "./contactMe.js";
import { Education } from "./education.js";
import { ProSkill } from "./proSkill.js";

export function ResumeLeft() {
  return (
    <Left>
      <Avatar />
      <ContactMe />
      <Education />
      <ProSkill />
    </Left>
  );
}

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin-right: 56px;
  background-color: #dbdbdd;
`;

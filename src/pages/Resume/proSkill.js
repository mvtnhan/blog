import React from "react";
import styled from "styled-components";

import { SectionHeader } from "../../components/section-header.js";

export function ProSkill() {
  return (
    <Skill>
      <SectionHeader>
        <h1>PRO SKILL</h1>
      </SectionHeader>
    </Skill>
  );
}

const Skill = styled.div`
  margin-bottom: 48px;
`;

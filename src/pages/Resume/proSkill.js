import React from "react";
import { SectionHeader } from "../../components/section-header.js";
import styled from "styled-components";

export function ProSkill() {
  return (
    <Skill>
      <SectionHeader>
        <p>PRO SKILL</p>
      </SectionHeader>
    </Skill>
  );
}

const Skill = styled.div`
  margin-bottom: 48px;
  ${SectionHeader} {
    p {
      color: white;
    }
  }
`;

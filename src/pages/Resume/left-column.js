import React from "react";
import styled from "styled-components";

import { ContactMe } from "./contact-me.js";
import { Education } from "./education.js";
import { Interest } from "./interest.js";

export function LeftColumn() {
  return (
    <StyledLeftColumn>
      <div className="BlockWrapper">
        <ContactMe />
        <Education />
        <Interest />
      </div>
    </StyledLeftColumn>
  );
}

const StyledLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-right: 24px;

  .BlockWrapper {
    padding-right: 24px;
  }
`;

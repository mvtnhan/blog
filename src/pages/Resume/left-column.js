import React from "react";
import styled from "styled-components";

import AboutMe from "./about-me.js";
import ContactMe from "./contact-me.js";
import Education from "./education.js";
import Interest from "./interest-block.js";

export default function LeftColumn() {
  return (
    <StyledLeftColumn className="LeftColumn">
      <div className="BlockWrapper">
        <AboutMe />
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

  .BlockWrapper {
    padding-right: 24px;
  }
`;

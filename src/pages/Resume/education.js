import React from "react";
import styled from "styled-components";

import BlockContent from "./block-content";
import BlockHeader from "./block-header.js";

export function Education() {
  return (
    <StyledEducation>
      <BlockHeader title="Education" />
      <BlockContent>
        <div className="BoxEdu">
          <h1>
            GIA DINH UNIVESITY <span>(2016-2020)</span>
          </h1>
          <span>SOFTWARE ENGINEER</span>
        </div>
      </BlockContent>
    </StyledEducation>
  );
}

const StyledEducation = styled.div`
  .BoxEdu {
    display: flex;
    flex-direction: column;
    line-height: 24px;

    span {
      color: #52515b;
    }

    h1 {
      margin: 0;
      font-size: 18px;
      color: #405361;
    }
  }
`;

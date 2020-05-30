import React from "react";
import styled from "styled-components";

import BlockHeader from "./block-header";

export function Education() {
  return (
    <StyledEducation>
      <BlockHeader title="Education" />
      <div className="BoxEdu">
        <h1>
          GIA DINH UNIVESITY <span>(2015-2020)</span>
        </h1>
        <span>SOFTWARE ENGINEER</span>
      </div>
    </StyledEducation>
  );
}

const StyledEducation = styled.div`
  margin-bottom: 32px;

  .BoxEdu {
    display: flex;
    padding: 16px 24px 0;
    flex-direction: column;
    line-height: 24px;

    span {
      color: #52515b;
    }

    h1 {
      margin: 0;
      font-size: 18px;
      color: #1e1c27;
    }
  }
`;

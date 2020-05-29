import React from "react";
import styled from "styled-components";

import BlockHeader from "./block-header";

export function Education() {
  return (
    <StyledEducation>
      <BlockHeader title="Education" />
      <div className="BoxEdu">
        <span>2015-2020</span>
        <h1>SOFTWARE ENGINEER</h1>
        <span>GIA DINH UNIVESITY</span>
      </div>
      <hr />
    </StyledEducation>
  );
}

const StyledEducation = styled.div`
  margin-bottom: 32px;

  .BoxEdu {
    display: flex;
    padding: 16px 24px;
    flex-direction: column;

    span {
      font-size: 16px;
      color: #52515b;
    }

    h1 {
      margin: 0;
      font-size: 18px;
      color: #1e1c27;
    }
  }

  hr {
    margin: auto 56px auto 24px;
    height: 2px;
    border-width: 0;
    background-color: #616161;
  }
`;

import React from "react";
import { SectionHeader } from "../../components/section-header.js";
import styled from "styled-components";

export function Education() {
  return (
    <Edu>
      <SectionHeader>
        <p>EDUCATION</p>
      </SectionHeader>
      <div className="BoxEdu">
        <span>2020</span>
        <h1>SOFTWARE ENGINEER</h1>
        <span>GIA DINH UNIVESITY</span>
      </div>
      <hr />
    </Edu>
  );
}

const Edu = styled.div`
  margin-bottom: 48px;
  ${SectionHeader} {
    p {
      color: white;
    }
  }

  .BoxEdu {
    display: flex;
    padding: 16px 48px;
    flex-direction: column;

    span {
      font-size: 20px;
      color: #52515b;
    }
    h1 {
      margin: 0;
      font-size: 26px;
      color: #1e1c27;
    }
  }

  hr {
    margin: auto 56px auto 48px;
    height: 2px;
    border-width: 0;
    background-color: #616161;
  }
`;

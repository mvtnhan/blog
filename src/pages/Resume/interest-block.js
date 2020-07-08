import React from "react";
import styled from "styled-components";

import BlockContent from "./block-content";
import BlockHeader from "./block-header.js";

export default function Interest() {
  return (
    <StyledInterest>
      <BlockHeader title="Interests" />
      <BlockContent>
        <ul>
          <li>
            <i className="fa fa-music" />
            <span>Music</span>
          </li>
          <li>
            <i className="fa fa-book" />
            <span>Reading</span>
          </li>
          <li>
            <i className="fa fa-code" />
            <span>Coding</span>
          </li>

          <li>
            <i className="fa fa-plane" />
            <span>Traveling</span>
          </li>
          <li>
            <i className="fa fa-motorcycle" />
            <span>Cycling</span>
          </li>
        </ul>
      </BlockContent>
    </StyledInterest>
  );
}

const StyledInterest = styled.div`
  ul {
    height: 100%;
    justify-content: space-between;
    display: flex;
    color: #3a3a3a;
    flex-wrap: wrap;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .Code {
      width: 100%;
    }

    i {
      font-size: 32px;
      color: #405361;
      width: 32px;
      padding-right: 8px;
    }

    .fa-code {
      left: 50%;
    }
  }
`;

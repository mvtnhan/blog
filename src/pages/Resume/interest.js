import React from "react";
import styled from "styled-components";

import BlockHeader from "./block-header";

export function Interest() {
  return (
    <StyledInterest>
      <BlockHeader title="Interests" />
      <List>
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
      </List>
    </StyledInterest>
  );
}

const StyledInterest = styled.div`
  margin-bottom: 32px;
`;

const List = styled.ul`
  height: 100%;
  font-size: 16px;
  list-style: none;
  justify-content: space-between;
  display: flex;
  padding: 32px;
  color: #3a3a3a;
  flex-wrap: wrap;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    :nth-child(3) {
      width: 100%;
    }
  }

  .Code {
    width: 100%;
  }

  i {
    font-size: 40px;
    color: #405361;
    width: 32px;
    padding-right: 8px;
  }

  .fa-code {
    left: 50%;
  }
`;

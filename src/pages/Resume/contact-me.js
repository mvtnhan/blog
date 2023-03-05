import React from "react";
import styled from "styled-components";

import BlockContent from "./block-content";
import BlockHeader from "./block-header.js";

export default function ContactMe() {
  return (
    <StyledContactMe>
      <BlockHeader title="Contact me" />
      <BlockContent>
        <ul>
          <li>
            <i className="fa fa-phone" />
            <span>+84 363 237 437</span>
          </li>
          <li>
            <i className="fa fa-envelope" />
            <a
              href="mailto:mvtnhan@gmail.com"
              onClick={() => {
                alert("This feature is currently under development");
              }}
            >
              mvtnhan@gmail.com
            </a>
          </li>
          <li>
            <i className="fa fa-globe" />
            <a
              href="https://mvtnhan.now.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/mvtnhan
            </a>
          </li>
          <li>
            <div>
              <i className="fa fa-home" />
            </div>
            <span>Tan Phu District, Ho Chi Minh City</span>
          </li>
        </ul>
      </BlockContent>
    </StyledContactMe>
  );
}

const StyledContactMe = styled.div`
  ul {
    margin: 0;
    color: #3a3a3a;

    li {
      border-bottom: 1px solid #3a3a3a;
      padding: 16px 0;
      display: flex;
      align-items: center;

      :first-child {
        padding-top: 0;
      }
    }

    i {
      font-size: 24px;
      color: #405361;
      width: 32px;
      padding-right: 8px;
    }

    a {
      text-decoration: none;
      color: #323232;
    }
  }
`;

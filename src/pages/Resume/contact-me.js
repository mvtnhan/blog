import React from "react";
import styled from "styled-components";

import BlockHeader from "./block-header";

export function ContactMe() {
  return (
    <Contact>
      <BlockHeader title="Contact me" />
      <List>
        <li>
          <i className="fa fa-phone" />
          <span>+84 929 4028 95</span>
        </li>
        <li>
          <i className="fa fa-envelope" />
          <a href="mailto:mvtnhan@gmail.com">mvtnhan@gmail.com</a>
        </li>
        <li>
          <i className="fa fa-globe" />
          <a
            href="https://mvtnhan.now.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            mvtnhan.now.sh
          </a>
        </li>
        <li>
          <div>
            <i className="fa fa-home" />
          </div>
          <span>
            Luy Ban Bich Street, Tan Thanh Ward,
            <br /> Tan Phu District, Ho Chi Minh City
          </span>
        </li>
      </List>
    </Contact>
  );
}

const Contact = styled.div`
  margin-bottom: 32px;
`;

const List = styled.ul`
  padding: 0 0 0 24px;
  margin: 0;
  list-style: none;
  font-size: 16px;
  color: #3a3a3a;

  li {
    border-bottom: 1px solid #3a3a3a;
    padding: 16px 0;
    display: flex;
    align-items: center;
  }

  i {
    font-size: 24px;
    color: #3a3a3a;
    width: 32px;
    padding-right: 8px;
  }

  a {
    text-decoration: none;
    color: #323232;
  }
`;

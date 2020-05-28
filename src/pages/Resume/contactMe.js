import React from "react";
import styled from "styled-components";

import { SectionHeader } from "../../components/section-header.js";

export function ContactMe() {
  return (
    <Contact>
      <SectionHeader>
        <h1>CONTACT ME</h1>
      </SectionHeader>
      <BoxContact>
        <i className="fa fa-phone" aria-hidden="true" />
        <span>+84 929 4028 95</span>
      </BoxContact>
      <hr />
      <BoxContact>
        <i className="fa fa-envelope" aria-hidden="true" />
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=new"
          target="_blank"
          rel="noopener noreferrer"
        >
          mvtnhan@gmail.com
        </a>
      </BoxContact>
      <hr />
      <BoxContact>
        <i className="fa fa-globe" aria-hidden="true" />
        <a
          href="https://mvtnhan.now.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          mvtnhan.now.sh
        </a>
      </BoxContact>
      <hr />
      <BoxContact>
        <i className="fa fa-home" aria-hidden="true" />
        <span>
          Luy Ban Bich Street, Tan Thanh Ward, Tan Phu District, Ho Chi Minh
          City
        </span>
      </BoxContact>
      <hr />
    </Contact>
  );
}

const BoxContact = styled.div`
  display: flex;
  padding: 8px 56px 8px 24px;

  i {
    font-size: 24px;
    width: 32px;
    margin: auto 8px auto 0;
    color: #3a3a3a;
    object-fit: contain;
    align-self: flex-start;
  }

  a {
    text-decoration: none;
  }

  span,
  a {
    color: #323232;
    font-size: 18px;
    margin: auto 0;
  }
`;

const Contact = styled.div`
  margin-bottom: 40px;

  hr {
    margin: auto 56px auto 24px;
    height: 1px;
    border-width: 0;
    background-color: #616161;
  }
`;

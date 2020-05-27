import React from "react";
import { SectionHeader } from "../../components/section-header.js";
import styled from "styled-components";

export function ContactMe() {
  return (
    <Contact>
      <SectionHeader>
        <p>CONTACT ME</p>
      </SectionHeader>
      <BoxContact>
        <i className="fa fa-phone" aria-hidden="true" />
        <span>+84 929 4028 95</span>
      </BoxContact>
      <hr />
      <BoxContact>
        <i className="fa fa-envelope" aria-hidden="true" />
        <span>mvtnhan@gmail.com</span>
      </BoxContact>
      <hr />
      <BoxContact>
        <i className="fa fa-home" aria-hidden="true" />
        <span>Ho Chi Minh City</span>
      </BoxContact>
      <hr />
      <BoxContact>
        <i className="fa fa-globe" aria-hidden="true" />
        <span>mvtnhan.now.sh</span>
      </BoxContact>
      <hr />
    </Contact>
  );
}

const BoxContact = styled.div`
  display: flex;
  padding: 8px 48px;
  i {
    font-size: 2.5em;
    margin-right: 16px;
    color: #3a3a3a;
    object-fit: contain;
    align-self: flex-start;
  }

  span {
    font-size: 18px;
    margin: auto 0;
  }
`;

const Contact = styled.div`
  margin-bottom: 48px;
  ${SectionHeader} {
    p {
      color: white;
    }
  }

  hr {
    margin: auto 56px auto 48px;
    height: 2px;
    border-width: 0;
    background-color: #616161;
  }
`;

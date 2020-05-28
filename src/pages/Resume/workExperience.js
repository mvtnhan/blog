import React from "react";
import styled from "styled-components";

import { SectionHeader } from "../../components/section-header.js";
import { Work } from "../../components/work.js";

export function WorkExperience() {
  return (
    <WorkExp>
      <SectionHeader>
        <h1>WORK EXPERIENCE</h1>
      </SectionHeader>
      <Work>
        <h1 className="titleProject">REALTIME CHAT APP</h1>
        <p className="company">Company / Institute Name</p>
        <div className="locationYear">
          <span>Washington DC, United States of America</span>
          <p>2020</p>
        </div>
        <span>
          An application called Chatty. It will allow only authenticated users
          to send and read messages and users can sign up by providing their
          email and creating a password, or by authenticating through a Google
          or GitHub account.
        </span>
      </Work>
      <hr />
      <Work>
        <h1 className="titleProject">REALTIME CHAT APP</h1>
        <p className="company">Company / Institute Name</p>
        <div className="locationYear">
          <span>Washington DC, United States of America</span>
          <p>2020</p>
        </div>
        <span>
          An application called Chatty. It will allow only authenticated users
          to send and read messages and users can sign up by providing their
          email and creating a password, or by authenticating through a Google
          or GitHub account.
        </span>
      </Work>
    </WorkExp>
  );
}

const WorkExp = styled.div`
  margin-bottom: 40px;

  ${SectionHeader} {
    margin-right: 0;
  }
  hr {
    margin: 24px auto 24px 0;
    height: 1px;
    border-width: 0;
    width: 56px;
    background-color: #616161;
  }
`;

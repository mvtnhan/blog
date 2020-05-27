import React from "react";
import styled from "styled-components";

import { SectionHeader } from "../../components/section-header.js";

export function WorkExperience() {
  return (
    <WorkExp>
      <SectionHeader>
        <p>Work Experince</p>
      </SectionHeader>
      <div className="BoxWork">
        <h1>REALTIME CHAT APP</h1>
        <p>Company / Institute Name</p>
        <LocationYear>
          <span>Washington DC, United States of America</span>
          <p>2020</p>
        </LocationYear>
        <span>
          An application called Chatty. It will allow only authenticated users
          to send and read messages and users can sign up by providing their
          email and creating a password, or by authenticating through a Google
          or GitHub account.
        </span>
      </div>
      <hr />
    </WorkExp>
  );
}

const LocationYear = styled.div`
  display: flex;
  span {
    object-fit: contain;
    align-self: flex-start;
  }
  p {
    margin: 0 56px 0 auto;
  }
`;

const WorkExp = styled.div`
  margin-bottom: 48px;
  ${SectionHeader} {
    margin-right: 0;

    p {
      color: white;
    }
  }

  hr {
    width: 56px;
    height: 2px;
    border-width: 0;
    background-color: #616161;
    display: flex;
    margin: 24px 0;
  }
`;

import React from "react";
import styled from "styled-components";

import BlockHeader from "./block-header";

import BlockWork from "./block-work.js";

export function WorkExperience() {
  return (
    <WorkExp>
      <BlockHeader title="Projects" />
      <BlockWork
        projectname="Realtime chat app"
        // company="Company / Institute Name"
        // location="Washington DC, United States of America"
        // year="2020"
        description="An application called Chatty. It will allow only authenticated users
          to send and read messages and users can sign up by providing their
          email and creating a password, or by authenticating through a Google
          or GitHub account."
      />
      <BlockWork
        projectname="Todo app"
        // company="Company / Institute Name"
        // location="Washington DC, United States of America"
        // year="2020"
        description="An application called Chatty. It will allow only authenticated users
          to send and read messages and users can sign up by providing their
          email and creating a password, or by authenticating through a Google
          or GitHub account."
      />
    </WorkExp>
  );
}

const WorkExp = styled.div`
  margin-bottom: 40px;
`;

import React from "react";
import styled from "styled-components";

import BlockHeader from "./block-header";

export function AboutMe() {
  return (
    <About>
      <BlockHeader title="About me" />
      <p className="textAboutMe">
        Hi, <br />
        I'm Nhan. I'm a fresher on my way to be a frontend engineer. I consider
        myself a positive person as I’ve never hesitated to encounter new
        challenges. With my passion, I’m willing to learn and able to work under
        a high workload so that I can have a chance to create a better version
        of myself day after day.
      </p>
    </About>
  );
}

const About = styled.div`
  margin-bottom: 32px;

  .textAboutMe {
    font-size: 16px;
    line-height: 22px;
    margin: 10px auto 0;
    color: #1e1c27;
  }

  @media (max-width: 490px) {
    .textAboutMe {
      margin-left: 24px;
    }
  }
`;

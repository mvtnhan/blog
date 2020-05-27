import React from "react";
import styled from "styled-components";

import { SectionHeader } from "../../components/section-header.js";

export function AboutMe() {
  return (
    <About>
      <SectionHeader>
        <p>ABOUT ME</p>
      </SectionHeader>
      <p className="textAboutMe">
        As you already know my name is Nhan, I come from Quang Ngai, Because I
        love technology so I chose a University of Information Technology to
        study IT. I just graduated this year and I looking for a company to
        apply my knowledge Currently, I am living in HCM city, I go home once a
        year on the Lunar New Year holiday. My hobbies are technology, music,
        and travel. I had traveled to Singapore and Malaysia last year I will
        save money to travel to many places Because I just graduated, so I want
        to become a Senior who has a lot of specialized skills and experience
        creating the beautiful website
      </p>
    </About>
  );
}

const About = styled.div`
  margin-bottom: 48px;
  ${SectionHeader} {
    margin-right: 0;
    p {
      color: white;
    }
  }
  .textAboutMe {
    margin: 8px auto;
    color: #57565b;
  }
`;

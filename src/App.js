import "./reset.scss";
import "./fonts/index.scss";

import Background from "./images/bodybg.jpg";
import React from "react";
import { RenderAbout } from "./component/About.js";
import { RenderContact } from "./component/Contact.js";
import { RenderFooter } from "./component/Footer.js";
import { RenderHeader } from "./component/Header.js";
import { RenderIntro } from "./component/Intro.js";
import { RenderMoreWorks } from "./component/MoreWorks.js";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <RenderHeader />
      <RenderIntro />
      <RenderMoreWorks />
      <RenderAbout />
      <RenderContact />
      <RenderFooter />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background: url(${Background});
`;

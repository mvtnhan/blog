import React from 'react';

import { About } from './about.js';
import { Contact } from './contact.js';
import { Footer } from './footer.js';
import { Intro } from './intro.js';
import { MoreWorks } from './moreWorks.js';

export default function Homepage() {
  return (
    <>
      <Intro />
      <MoreWorks />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

// import styled from 'styled-components';
// import Background from './images/bodybg.jpg';
// const Wrapper = styled.div`
//   background: url(${Background});
// `;

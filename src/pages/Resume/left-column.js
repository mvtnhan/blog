import React from 'react';
import styled from 'styled-components';

import { ContactMe } from './contact-me.js';
import { Education } from './education.js';
import { Interest } from './interest.js';

export function LeftColumn() {
  return (
    <StyledLeftColumn className="LeftColumn">
      <div className="BlockWrapper">
        <ContactMe />
        <Education />
        <Interest />
      </div>
    </StyledLeftColumn>
  );
}

const StyledLeftColumn = styled.div`
  display: flex;
  flex-direction: column;

  .BlockWrapper {
    padding-right: 24px;
  }
`;

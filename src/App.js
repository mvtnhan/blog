import React from 'react';
import styled from 'styled-components';

// import Homepage from "./pages/Homepage";
import Resume from './pages/Resume';

function App() {
  return (
    <PageWrapper>
      <Resume />
    </PageWrapper>
  );
}

export default App;

const PageWrapper = styled.div`
  height: 100%;
`;

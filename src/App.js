import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import Homepage from "./pages/Homepage";
import Resume from "./pages/Resume";

function App() {
  return (
    <PageWrapper>
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
      </Router>
    </PageWrapper>
  );
}

export default App;

const PageWrapper = styled.div`
  height: 100%;
`;

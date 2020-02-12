import React from "react";
import { Router, Route } from "react-router-dom";
import styled from "styled-components";
import { createBrowserHistory } from "history";
import Movie from "./Components/Movie/Movie";

const MainColumn = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  padding: 20px;
`;

const defaultHistory = createBrowserHistory();

const App = ({ history = defaultHistory }) => (
  <Router history={history}>
    <MainColumn>
      <Route exact path="/movie/:id" component={Movie} />
    </MainColumn>
  </Router>
);

export default App;

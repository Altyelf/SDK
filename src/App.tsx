import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Terms from './pages/terms/Terms';
import Home from './pages/home/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/api">
          <Terms />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

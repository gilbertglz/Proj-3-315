import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Results from './components/pages/Results/Results';
import Explore from './components/pages/Explore/Explore';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/results">
            <Results/>
          </Route>
          <Route path="/explore">
            <Explore/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

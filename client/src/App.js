import React from 'react';
<<<<<<< HEAD

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Results from './components/pages/Results/Results';
import Explore from './components/pages/Explore/Explore';
import Navigation  from './components/navigation/Navigation';
import styles from './App.module.scss';
=======
import './App.scss';
//import Title from './components/Title/Title.jsx';
import OpenNotify from './components/OpenNotify_API/OpenNotify.jsx';
import Sun from './components/Sun_API/Sun.jsx'
>>>>>>> a439bfe... Added sun api function

const App = () => {

  return (
<<<<<<< HEAD
    <div className={styles.App} id="outer-container">
      <Router>
        <Navigation className={styles.nav} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="page-wrap">
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
        </div>
      </Router>
    </div>
=======
    <>
      <div className="App">
        <OpenNotify/>
        <Sun/>
      </div>
    </>
>>>>>>> a439bfe... Added sun api function
  );
}

export default App;
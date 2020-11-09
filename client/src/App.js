import React, {useState} from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Results from './components/pages/Results/Results';
import Explore from './components/pages/Explore/Explore';
import Navigation  from './components/navigation/Navigation';
import styles from './App.module.scss';

const App = () => {
  const [mapInfo, setMapInfo] = useState({
    location: {
      lat: 30.6188,
      lng: -96.3365
    }
  });
  const locationChanged = (location) => {
    console.log(location);
    setMapInfo({
      location: location
    });
  }
  return (
    <div className={styles.App} id="outer-container">
      <Router>
        <Navigation className={styles.nav} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="page-wrap">
          <Switch>
            <Route exact path="/">
              <Home onLocationSelect={locationChanged} location={mapInfo.location}/>
            </Route>
            <Route path="/results">
              <Results location={mapInfo.location}/>
            </Route>
            <Route path="/explore">
              <Explore/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
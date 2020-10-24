import React from 'react';
import './App.scss';
import AddressSearchBar from './components/AddressSearchBar/AddressSearchBar.jsx';
import TimeZoneDropDown from './components/TimeZoneDropDown/TimeZoneDropDown.jsx';
//import uuidv4 from 'uuid/v4'
//use uuidv4() to generate random ids.

function App() {
  return (
    <div className="App">
      <TimeZoneDropDown />
      <AddressSearchBar />
    </div>
  );
}

export default App;

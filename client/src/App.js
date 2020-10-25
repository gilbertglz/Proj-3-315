import React from 'react';
import './App.scss';
import Geocoding from './components/Geocoding_API/Geocoding.jsx'
import Title from './components/Title/Title.jsx';

const App = () => {
  return (
    <div className="App">
      <Geocoding />
    </div>
  );
}

export default App;

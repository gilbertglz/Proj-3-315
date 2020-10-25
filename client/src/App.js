import React from 'react';
import './App.scss';
import Title from './components/Title/Title.jsx';
import OpenNotify from './components/OpenNotify_API/OpenNotify.jsx';

const App = () => {
  return (
    <>
      <div className="App">
        <OpenNotify/>
      </div>
    </>
  );
}

export default App;

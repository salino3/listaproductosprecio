import React from 'react';
import  Router  from './Router';

import './App.css';
import Nav from './components/Nav';
//import TryReadjson from "./components/TryReadjson";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <TryReadjson /> */}
        <Router />
      </header>
    </div>
  );
  
}

export default App;

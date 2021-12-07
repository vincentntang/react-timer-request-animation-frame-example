import './App.css';
import React from 'react';

import { RafCounter } from "./requestAnimFrame/RafCounter";
import { BasicCounter } from "./basicCounter/BasicCounter"; 
function App () {
  return (
    <div className="App">
      Request Animation Frame Counter
      <RafCounter/>
      <hr/>
      Basic Counter
      <BasicCounter/>
    </div>
  );  
}

export default App; 
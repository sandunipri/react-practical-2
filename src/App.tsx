import React from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";

function  App (){
  // @ts-ignore
    return(
      <div className="app">
          <Counter data ={"sanduni"}></Counter>
      </div>
  )
}

export default App;

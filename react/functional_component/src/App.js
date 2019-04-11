import React, { Component } from 'react';
import './App.css';
import {HelloFunctional} from './HelloFunctional';

class App extends Component {
  render() {
    return (
      <div className="App">
			<HelloFunctional name="Erno"/>
      </div>
    );
  }
}

export default App;

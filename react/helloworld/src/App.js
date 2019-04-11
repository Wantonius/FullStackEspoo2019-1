import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import {FunctionalHello} from './FunctionalHello';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
			<h1>Hello World</h1>
			<HelloWorld />
			<HelloWorld name="Erno"/>
			<FunctionalHello />
			<FunctionalHello name="Erno"/>
      </div>
    );
  }
}

export default App;

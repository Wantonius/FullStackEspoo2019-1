import React, { Component } from 'react';
import StatefulComponent from './StatefulComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
		<StatefulComponent dummyprop="dummycontent"/>	
      </div>
    );
  }
}

export default App;

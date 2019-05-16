import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstButton from './components/FirstButton'
import SecondButton from './components/SecondButton'

class App extends React.Component {
  
  constructor(props) {
	  super(props);
	  this.state = {
		  message:""
	  }
  }  
  
  callback = (message) => {
	  this.setState({
		  message:message
	  })
  }
  
  render() {
	  return (
		<div className="App">
			<p>Message from clicked button says:{this.state.message}</p>
			<FirstButton callback={this.callback}/>
			<SecondButton callback={this.callback}/>
		</div>
	  );
  }
}

export default App;

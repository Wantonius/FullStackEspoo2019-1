import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import './App.css';

class App extends Component {
  constructor(props) {
	  super(props);
	  this.state= {
		  isLogged:false,
		  token:""
	  }
  }
  
  onRegister = (user) => {
	  let request = {
		  method:"POST",
		  mode:"cors",
		  headers:{"Content-Type":"application/json"},
		  body:JSON.stringify(user)
	  }
	  fetch("/register",request).then(response => {
		if(response.ok) {
			alert("Register success!");
		} else {
			alert("Register failed! Is username already in use?");
		}
	  }).catch(error => {
		console.log(error);  
	  })
	  
  }

  onLogin = (user) => {
	  let request = {
		  method:"POST",
		  mode:"cors",
		  headers:{"Content-Type":"application/json"},
		  body:JSON.stringify(user)
	  }
	  fetch("/login",request).then(response => {
		if(response.ok) {
			response.json().then(data => {
				this.setState({
					token:data.token,
					isLogged:true
				});
			}).catch(error => {
				console.log("JSON parse failed in response:"+error);
			});
		} else {
			console.log("Login failed. Reason:"+response.status);
		}
	  }).catch(error => {
		console.log(error);  
	  });	  
  } 
  
  render() {
    return (
      <div className="App">
		<NavBar isLogged={this.state.isLogged}/>
		<hr/>
		<Switch>
			<Route exact path="/" render={() => 
				<LoginForm onLogin={this.onLogin}
						   onRegister={this.onRegister}/>
			}/>
		</Switch>
      </div>
    );
  }
}

export default App;

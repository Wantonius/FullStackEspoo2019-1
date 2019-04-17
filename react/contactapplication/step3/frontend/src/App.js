import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import './App.css';

class App extends Component {
  constructor(props) {
	  super(props);
	  this.state= {
		  isLogged:false,
		  token:"",
		  contactList:[]
	  }
  }
  
  
  //LOGIN API
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
				}, () => {this.getList()});
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
  
  //CONTACTLIST API
  
  getList = () => {
	  console.log("getList");
	  let request = {
		  method:"GET",
		  mode:"cors",
		  headers:{"Content-Type":"application/json",
			       "token":this.state.token}
	  }
	  fetch("/api/contact",request).then(response => {
		  if(response.ok) {
			  response.json().then(data => {
					this.setState({
						contactList:data.data
					})
			  }).catch(error => {
				console.log("Parse JSON failed for contactList:"+error);  
			  })
		  } else {
			    if(response.status === 403) {
				  this.setState({
					  isLogged:false,
					  token:"",
					  contactList:[]
				  })
				}
				console.log("Fetch list failed. Reason:"+response.status);
		  }
	  }).catch(error => {
		  console.log(error);
	  })
  }
  
  addToList = (contact) => {
	  let request = {
		  method:"POST",
		  mode:"cors",
		  headers:{"Content-Type":"application/json",
				   "token":this.state.token},
		  body:JSON.stringify(contact)
	  }
	  fetch("/api/contact",request).then(response => {
		  if(response.ok) {
			  this.getList();
		  } else {
			  console.log("Failed to add contact. Reason:"+response.status);
			  if(response.status===403) {
				  this.setState({
					  isLogged:false,
					  token:"",
					  contactList:[]
				  })
			  }
		  }
	  }).catch(error => {
			console.log(error);
	  })
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
			<Route path="/list" render={() =>
				<ContactList contactList={this.state.contactList}/>
			}/>
			<Route path="/contact" render={() =>
				<ContactForm addToList={this.addToList}/>
			}/>
		</Switch>
      </div>
    );
  }
}

export default App;

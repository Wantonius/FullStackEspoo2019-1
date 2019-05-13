import React, { Component } from 'react';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  constructor(props) {
	  super(props);
	  this.state= {
		  contactList:[]
	  }
  }
  
  loadFromStorage = () => {
	  if(sessionStorage.getItem("state")) {
		  let state = JSON.parse(sessionStorage.getItem("state"));
		  this.setState(state)
	  }
  }
  
  saveToStorage = () => {
	  sessionStorage.setItem("state",JSON.stringify(this.state));
  }
  
  componentDidMount() {
	  this.loadFromStorage();
  }
  //LOGIN API


    
  
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
					}, () => {
						this.saveToStorage();
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
				  }, () => {
					  this.saveToStorage();
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
				}, () => {
					this.saveToStorage();
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
		<NavBar/>
		<hr/>
		<Switch>
			<Route exact path="/" render={() => (
				this.props.isLogged ?
				(<Redirect to="/list"/>) :
				(<LoginForm />)
			)}/>
			<Route path="/list" render={() => (
				this.props.isLogged ?
				(<ContactList contactList={this.state.contactList}/>):
				(<Redirect to="/"/>)
			)}/>
			<Route path="/contact" render={() => (
			    this.props.isLogged ?
				(<ContactForm addToList={this.addToList}/>):
				(<Redirect to="/"/>)
			)}/>
			<Route render={() => (
				this.props.isLogged ? 
				(<Redirect to="/list"/>):
				(<Redirect to="/"/>)
			)}/>	
		</Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		isLogged:state.isLogged
	}
}

export default withRouter(connect(mapStateToProps)(App));

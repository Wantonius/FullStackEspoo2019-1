import React, { Component } from 'react';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {


  
/*
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
  */
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
				(<ContactList />):
				(<Redirect to="/"/>)
			)}/>
			<Route path="/contact" render={() => (
			    this.props.isLogged ?
				(<ContactForm />):
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
		isLogged:state.login.isLogged
	}
}

export default withRouter(connect(mapStateToProps)(App));

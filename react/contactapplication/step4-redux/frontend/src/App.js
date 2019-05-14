import React, { Component } from 'react';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {

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

import React from 'react';
import {Form,Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {onRegister} from '../actions/LoginActions';

// Will be changed to functional component in a later step ...with hooks

class LoginForm extends React.Component {

	constructor(props) {
		super(props);
		this.state={
			username:"",
			password:""
		}
	}
	
	onChange = (event) => {
		let state = {};
		state[event.target.name] = event.target.value;
		this.setState(state);
	}
	
	onLogin = (event) => {
		let user = {
			username:this.state.username,
			password:this.state.password
		}
		this.props.onLogin(user);
	}
	
	onRegister = (event) => {
		let user = {
			username:this.state.username,
			password:this.state.password
		}
		this.props.dispatch(onRegister(user));		
	}
	
	render() {
		return(
			<Form>
				<Form.Field>
					<label htmlFor="username">Username</label>
					<input type="text"
						   name="username"
						   value={this.state.username}
						   onChange={this.onChange}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="password">Password</label>
					<input type="password"
						   name="password"
						   value={this.state.password}
						   onChange={this.onChange}/>
				</Form.Field>
				<Button onClick={this.onRegister}>Register</Button>
				<Button onClick={this.onLogin}>Login</Button>
			</Form>
		)
	}
}

export default connect()(LoginForm);
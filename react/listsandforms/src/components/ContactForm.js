import React from 'react';
import {Form, Button} from 'semantic-ui-react';

export default class ContactForm extends React.Component {

	// Later this will be functional component with statehooks
	
	constructor(props) {
		super(props)
		this.state = {
			firstname:"",
			lastname:"",
			address:"",
			email:"",
			phone:""
		}
	}
	
	onChange = (event) => {
		let state = {};
		state[event.target.name] = event.target.value
		this.setState(state);
	}
	
	onSubmit = (event) => {
		event.preventDefault();
		let contact = {
			id:0,
			firstname:this.state.firstname,
			lastname:this.state.lastname,
			address:this.state.address,
			email:this.state.email,
			phone:this.state.phone
		}
		this.props.addToList(contact);
		this.setState({
			firstname:"",
			lastname:"",
			address:"",
			email:"",
			phone:""			
		})
	}
	
	render() {
		return(
			<Form onSubmit={this.onSubmit}>
				<Form.Field>
					<label htmlFor="firstname">First Name:</label>
					<input type="text"
						   name="firstname"
						   onChange={this.onChange}
						   value={this.state.firstname}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="lastname">Last Name:</label>
					<input type="text"
						   name="lastname"
						   onChange={this.onChange}
						   value={this.state.lastname}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="address">Address:</label>
					<input type="text"
						   name="address"
						   onChange={this.onChange}
						   value={this.state.address}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="email">Email:</label>
					<input type="email"
						   name="email"
						   onChange={this.onChange}
						   value={this.state.email}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="phone">Phone:</label>
					<input type="text"
						   name="phone"
						   onChange={this.onChange}
						   value={this.state.phone}/>
				</Form.Field>
				<br/>
				<Button type="submit">Add</Button>
			</Form>
		
		)
	}
}
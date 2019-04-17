import React from 'react';
import {Form,Button,Label} from 'semantic-ui-react';

export default class ContactForm extends React.Component {

	constructor(props) {
		super(props);
		this.state= {
			name:"",
			surname:"",
			title:"",
			phones:[],
			phone:"",
			mobiles:[],
			mobile:"",
			emails:[],
			email:"",
			nickname:"",
			street:"",
			city:"",
			postcode:"",
			country:""			
		}
	}	
	
	onChange = (event) => {
		let state = {};
		state[event.target.name] = event.target.value;
		this.setState(state);
	}
	
	onSubmit = (event) => {
		event.preventDefault();
		if(this.state.name.length === 0 || this.state.surname.length === 0) {
			alert("Name and surname required");
			return;
		}
		let contact = {
			"name":this.state.name,
			"surname":this.state.surname,
			"title":this.state.title,
			"nickname":this.state.nickname,
			"phone":this.state.phones,
			"mobile":this.state.mobiles,
			"email":this.state.emails,
			"street":this.state.street,
			"city":this.state.city,
			"postcode":this.state.postcode,
			"country":this.state.country
		}
		this.props.addToList(contact);
		this.setState({
			name:"",
			surname:"",
			title:"",
			phones:[],
			phone:"",
			mobiles:[],
			mobile:"",
			emails:[],
			email:"",
			nickname:"",
			street:"",
			city:"",
			postcode:"",
			country:""	
		})
	}
	
	submit = (event) => {
		event.preventDefault();
	}
	
	
	handleKeyPress = (event) => {
		if(event.key === 'Enter') {
			if(event.target.name === "phone") {
				let phones = this.state.phones.concat(event.target.value)
				this.setState({
					phones:phones,
					phone:""
				})
			}
			if(event.target.name === "mobile") {
				let mobiles = this.state.mobiles.concat(event.target.value)
				this.setState({
					mobiles:mobiles,
					mobile:""
				})
			}
			if(event.target.name === "email") {
				let emails = this.state.emails.concat(event.target.value)
				this.setState({
					emails:emails,
					email:""
				})
			}
		}
	}
	
	render() {
		let phoneLabels = <div></div>;
		if(this.state.phones.length > 0) {
			phoneLabels = this.state.phones.map((phone,index) => 
				<Label key={index}>{phone}</Label>
			)
		}
		let mobileLabels = <div></div>;
		if(this.state.mobiles.length > 0) {
			mobileLabels = this.state.mobiles.map((mobile,index) => 
				<Label key={index}>{mobile}</Label>
			)
		}			
		let emailLabels = <div></div>;
		if(this.state.emails.length > 0) {
			emailLabels = this.state.emails.map((email,index) => 
				<Label key={index}>{email}</Label>
			)
		}
		return (
			<div>
			<Form onSubmit={this.submit}>
				<Form.Field>
					<label htmlFor="title">Title</label>
					<input type="text"
						   name="title"
						   value={this.state.title}
						   onChange={this.onChange}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="name">Name</label>
					<input type="text"
						   name="name"
						   value={this.state.name}
						   onChange={this.onChange}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="surname">Surname</label>
					<input type="text"
						   name="surname"
						   value={this.state.surname}
						   onChange={this.onChange}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="nickname">Nickname</label>
					<input type="text"
						   name="nickname"
						   value={this.state.nickname}
						   onChange={this.onChange}/>
				</Form.Field>
				{phoneLabels}
				<Form.Field>
					<label htmlFor="phone">Phone</label>
					<input type="text"
						   name="phone"
						   value={this.state.phone}
						   onKeyPress={this.handleKeyPress}
						   onChange={this.onChange}/>
				</Form.Field>
				{mobileLabels}
				<Form.Field>
					<label htmlFor="mobile">Mobile</label>
					<input type="text"
						   name="mobile"
						   value={this.state.mobile}
						   onKeyPress={this.handleKeyPress}
						   onChange={this.onChange}/>
				</Form.Field>
				{emailLabels}
				<Form.Field>
					<label htmlFor="email">Email</label>
					<input type="email"
						   name="email"
						   value={this.state.email}
						   onKeyPress={this.handleKeyPress}
						   onChange={this.onChange}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="street">Street</label>
					<input type="text"
						   name="street"
						   value={this.state.street}
						   onChange={this.onChange}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="city">City</label>
					<input type="text"
						   name="city"
						   value={this.state.city}
						   onChange={this.onChange}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="postcode">Postcode</label>
					<input type="text"
						   name="postcode"
						   value={this.state.postcode}
						   onChange={this.onChange}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="country">Country</label>
					<input type="text"
						   name="country"
						   value={this.state.country}
						   onChange={this.onChange}/>
				</Form.Field>
			</Form>
			<Button onClick={this.onSubmit}>Add</Button>
			</div>
		)
		
	}
	
	
}
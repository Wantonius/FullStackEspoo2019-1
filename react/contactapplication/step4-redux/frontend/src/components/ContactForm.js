import React from 'react';
import {Form,Button,Label} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {addToList,editContact} from '../actions/ContactActions';
import {withRouter} from 'react-router-dom';

class ContactForm extends React.Component {

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
			country:"",
			mode:"Add",
			id:""
		}
	}	
	
	componentDidMount() {
		console.log(this.props.location.pathname);
		if(this.props.location.pathname.length > 8) {
			let id = this.props.location.pathname.substring(9);
			let tempContact = {};
			for(let i=0;i<this.props.list.length;i++) {
				if(id === this.props.list[i]._id) {
					tempContact = this.props.list[i];
				}
			}
			if(tempContact._id) {
				console.log("id found!");
				this.setState({
					mode:"Edit",
					name:tempContact.name,
					surname:tempContact.surname,
					title:tempContact.title,
					emails:tempContact.email,
					phones:tempContact.phone,
					mobiles:tempContact.mobile,
					nickname:tempContact.nickname,
					street:tempContact.street,
					city:tempContact.city,
					country:tempContact.country,
					postcode:tempContact.postcode,
					id:tempContact._id
				})
			}
		}
	}
	
	removeFromLists = (event) => {
		let tempArray = [];
		if(event.target.id === "phonelabel") {
			for(let i = 0;i<this.state.phones.length;i++) {
				if(event.target.innerHTML == this.state.phones[i]) {
					tempArray = this.state.phones;
					tempArray.splice(i,1)
					this.setState({
						phones:tempArray
					})
					return;
				}
			}
		}
		if(event.target.id === "mobilelabel") {
			for(let i = 0;i<this.state.mobiles.length;i++) {
				if(event.target.innerHTML == this.state.mobiles[i]) {
					tempArray = this.state.mobiles;
					tempArray.splice(i,1)
					this.setState({
						mobiles:tempArray
					})
					return;
				}
			}
		}
		if(event.target.id === "emaillabel") {
			for(let i = 0;i<this.state.emails.length;i++) {
				if(event.target.innerHTML == this.state.emails[i]) {
					tempArray = this.state.emails;
					tempArray.splice(i,1)
					this.setState({
						emails:tempArray
					})
					return;
				}
			}			
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
		if(this.state.mode === "Add") {
			this.props.dispatch(addToList(contact,this.props.token));
		} else {
			this.props.dispatch(editContact(contact,this.state.id,this.props.token));
		}
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
			country:"",
			mode:"Add",
			id:""
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
				<Label key={index} id="phonelabel" onClick={this.removeFromLists}>{phone}</Label>
			)
		}
		let mobileLabels = <div></div>;
		if(this.state.mobiles.length > 0) {
			mobileLabels = this.state.mobiles.map((mobile,index) => 
				<Label key={index} id="mobilelabel" onClick={this.removeFromLists}>{mobile}</Label>
			)
		}			
		let emailLabels = <div></div>;
		if(this.state.emails.length > 0) {
			emailLabels = this.state.emails.map((email,index) => 
				<Label key={index} id="emaillabel" onClick={this.removeFromLists}>{email}</Label>
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
						   placeholder="Press enter to save information"
						   value={this.state.phone}
						   onKeyPress={this.handleKeyPress}
						   onChange={this.onChange}/>
				</Form.Field>
				{mobileLabels}
				<Form.Field>
					<label htmlFor="mobile">Mobile</label>
					<input type="text"
						   name="mobile"
						   placeholder="Press enter to save information"
						   value={this.state.mobile}
						   onKeyPress={this.handleKeyPress}
						   onChange={this.onChange}/>
				</Form.Field>
				{emailLabels}
				<Form.Field>
					<label htmlFor="email">Email</label>
					<input type="email"
						   name="email"
						   placeholder="Press enter to save information"
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
			<Button onClick={this.onSubmit}>{this.state.mode}</Button>
			</div>
		)
		
	}
	
	
}

const mapStateToProps = (state) => {
	return {
		token:state.login.token,
		list:state.contacts.list
	}
}

export default withRouter(connect(mapStateToProps)(ContactForm));
import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state= {
			list:[],
			id:100
		}
	}
	
	addToList = (contact) => {
		contact.id = this.state.id;
		let tempId = this.state.id+1;
		let tempList = this.state.list.concat(contact);
		this.setState({
			list:tempList,
			id:tempId
		}, () => {
			console.log(this.state.list)
		});
	}
	
	removeFromList = (id) => {
		let tempId = parseInt(id,10);
		let tempList = [];
		for(let i=0;i<this.state.list.length;i++) {
			if(this.state.list[i].id !== tempId) {
				tempList.push(this.state.list[i]);
			}
		}
		this.setState({
			list:tempList
		})
	}
	
	editContact = (contact,id) => {
		let tempId = parseInt(id,10);
		let tempList = [];
		for(let i = 0;i<this.state.list.length;i++) {
			if(this.state.list[i].id !== tempId) {
				tempList.push(this.state.list[i])
			} else {
				tempList.push(contact);
			}
		}
		this.setState({
			list:tempList
		})
	}
	
	render() {
		return (
		  <div className="App">
			  <div style={{width:600, 
			               margin:"0 auto",
						   backgroundColor:"white"}}>
				<ContactForm addToList={this.addToList}/>
			  </div>
			  <ContactList list={this.state.list}
						   remove={this.removeFromList}
						   editContact={this.editContact}/>
		  </div>
		);
	}
}

export default App;

import React from 'react';
import {View,ScrollView} from 'react-native';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';

export default class App extends React.Component {
  
	constructor(props) {
		super(props);
		this.state = {
			list:[],
			id:100
		}
	}
	
	componentDidMount() {
		this.getList();
	}
	
	getList = () => {
		let request = {
			method:"GET",
			headers:{"Content-type":"application/json"},
			mode:"cors"
		}
		fetch("https://fsespoobackend.herokuapp.com/api/shopping",request).then(response => {
			if(response.ok) {
				response.json().then(data => {
					this.setState({
						list:data
					})
				}).catch(error => {
					console.log("Can't parse JSON");
				})
			} else {
				console.log("Responded with status:"+response.status);
			}
		}).catch(error => {
			console.log("Responded with an error");
		})
	}
	
	addToList = (item) => {
		let request = {
			method:"POST",
			headers:{"Content-type":"application/json"},
			mode:"cors",
			body:JSON.stringify(item)
		}
		fetch("https://fsespoobackend.herokuapp.com/api/shopping",request).then(response => {
			if(response.ok) {
				console.log("Success adding an item");
				this.getList();
			} else {
				console.log("Responded with status:"+response.status);
			}
		}).catch(error => {
			console.log("Responded with an error");
		})
	}
	
	removeFromList = (id) => {
		let request = {
			method:"DELETE",
			headers:{"Content-type":"application/json"},
			mode:"cors"
		}
		fetch("https://fsespoobackend.herokuapp.com/api/shopping/"+id,request).then(response => {
			if(response.ok) {
				console.log("Success removing an item");
				this.getList();
			} else {
				console.log("Responded with status:"+response.status);
			}
		}).catch(error => {
			console.log("Responded with an error");
		})
	} 
  
	render() {
		return (
		<ScrollView>
			<View>
				<ShoppingForm addToList={this.addToList}/>
				<ScrollView horizontal={true}>
					<ShoppingList list={this.state.list}
								removeFromList={this.removeFromList}/>
				</ScrollView>
			</View>
		</ScrollView>
		);
	};
}



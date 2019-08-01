import React from 'react';
import {View} from 'react-native';
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
	
	addToList = (item) => {
		item.id = this.state.id;
		let tempList = this.state.list.concat(item);
		this.setState({
			id:item.id+1,
			list:tempList
		})
	}
	
	removeFromList = (id) => {
		let tempList= [];
		for(let i=0;i<this.state.list.length;i++) {
			if(id !== this.state.list[i].id) {
				tempList.push(this.state.list[i]);
			}
		}
		this.setState({
			list:tempList
		})
	} 
  
	render() {
		return (
			<View>
				<ShoppingForm addToList={this.addToList}/>
				<ShoppingList list={this.state.list}
							removeFromList={this.removeFromList}/>
			</View>
		);
	};
}



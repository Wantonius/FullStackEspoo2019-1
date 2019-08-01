import React from 'react';
import {View} from 'react-native';
import ShoppingForm from './components/ShoppingForm';

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
  
	render() {
		return (
			<View>
				<ShoppingForm addToList={this.addToList}/>
			</View>
		);
	};
}



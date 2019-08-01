import React from 'react';
import {
	View,
	Button,
	Text,
	TextInput,
	StyleSheet} from 'react-native';
	
export default class ShoppingForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			type:"",
			price:"",
			count:""
		}
	}
	
	addToList = () => {
		let item = {
			id:0,
			type:this.state.type,
			count:this.state.count,
			price:this.state.price
		}
		this.props.addToList(item);
		this.setState({
			type:"",
			price:"",
			count:""
		});
	}
	
	render() {
		return (
		<View>
			<View>
				<Text>Type:</Text>
				<TextInput onChangeText={
					(text)=>{
						this.setState({
							type:text
						})
					}
				}
							value={this.state.type}
							placeholder="Type of item"/>
			</View>
			<View>
				<Text>Count:</Text>
				<TextInput onChangeText={
					(text)=>{
						this.setState({
							count:text
						})
					}
				}
							keyboardType="numeric"
							value={this.state.count}
							placeholder="Number of items"/>
			</View>
			<View>
				<Text>Price:</Text>
				<TextInput onChangeText={
					(text)=>{
						this.setState({
							price:text
						})
					}
				}
							keyboardType="numeric"
							value={this.state.price}
							placeholder="Price of item"/>
			</View>
			<Button onPress={this.addToList}
					title="Add"/>
		</View>
		);
	}
	
	
}
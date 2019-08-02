import React from 'react';
import {FlatList,View, TouchableHighlight, Text, StyleSheet} from 'react-native';

export default class ShoppingList extends React.Component {
	
	removeFromList = (id) => {
		this.props.removeFromList(id);
	}
	
	render() {
		
		let styles = StyleSheet.create({
			textStyle:{
				fontSize:18,
				paddingRight:10,

			},
			buttonStyle:{
				width:80,
				height:50,
				backgroundColor:"red",
				justifyContent:"center",
				alignItems:"center"
			},
			viewStyle:{
				flexDirection:"row",
				height:80
			}
		})
		
		return(
			<View>
				<FlatList
					data={this.props.list}
					renderItem={
						({item}) => {
						return (<View style={styles.viewStyle}>	
							<Text style={styles.textStyle}>Type:{item.type} Count:{item.count} Price:{item.price}</Text>
							<TouchableHighlight style={styles.buttonStyle}
							onPress={() => this.removeFromList(item.id)}>
							<Text>Remove</Text>
							</TouchableHighlight>
							</View>)
							}
					}
					keyExtractor={item => ""+item.id}
					/>
			</View>
		)
	}
}
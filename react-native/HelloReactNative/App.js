/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import Hello from './components/Hello';
 

export default class App extends React.Component {
	
	state = {tempText:"Hello World"};

	styles = StyleSheet.create({
	textStyle:{
		color:"red"
		}
	});

	onButtonPress = (event) => {
	this.setState({
		tempText:"You pressed the button"
	})
	}

	render() {
	  return (
		<View>
			<Hello/>
			<Text style={this.styles.textStyle}>{this.state.tempText}</Text>
			<Button 
				onPress={this.onButtonPress}
				title="Press me!"/>
		</View>
	  );
	};
}



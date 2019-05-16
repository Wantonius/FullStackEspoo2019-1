import React from 'react';
import Decorator from './Decorator';

class SecondButton extends React.Component {

	callback = (event) => {
		this.props.callback("You clicked the second button");
	}
	
	render() {
		let buttonStyle = {
			backgroundColor:this.props.color
		}
		return (
			<button style={buttonStyle}
			onClick={this.callback}>Click me too!</button>
		)
	}
}

export default Decorator(SecondButton);
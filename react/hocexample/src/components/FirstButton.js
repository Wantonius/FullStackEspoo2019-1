import React from 'react';
import Decorator from './Decorator';

class FirstButton extends React.Component {

	callback = (event) => {
		this.props.callback("You clicked the first button");
	}
	
	render() {
		let buttonStyle = {
			backgroundColor:this.props.color
		}
		return (
			<button style={buttonStyle}
			onClick={this.callback}>Click me!</button>
		)
	}
}

export default Decorator(FirstButton);
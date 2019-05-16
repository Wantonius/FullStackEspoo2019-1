import React from 'react';

const Decorator = (DecoratedComponent) => {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				color:"red"
			}
		}
		
		update = (event) => {
			this.setState({
				color:event.target.value
			})
		}

		render() {
			return(
				<div>
					<DecoratedComponent
					{...this.props}
					color={this.state.color}/>
					<br/>
					<input type="text"
						   name="colorpicker"
						   onChange={this.update}
						   value={this.state.color}/>
				</div>
			)			
		}
	}
}

export default Decorator;
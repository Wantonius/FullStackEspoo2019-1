import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {onLogout} from '../actions/LoginActions';

class NavBar extends React.Component {
	
	logout = () => {
		this.props.dispatch(onLogout(this.props.token));
	}
	
	render() {
		let style = {
			"height":60,
			"backgroundColor":"lightblue"
		}
		if(this.props.loading) {
			return (<div style={style}>
						<h4>Loading...</h4>
				   </div>)			
		}
		let errorMessage = <p></p>
		if(this.props.error.length > 0) {
			errorMessage = <p style={{color:"red"}}>Error:{this.props.error}</p>
		}
		if(this.props.isLogged) {
			return (<div style={style}>
				{errorMessage}
				<ul style={{"listStyleType":"none"}}>
					<li><Link to="/list">Contacts</Link></li>
					<li><Link to="/contact">Add Contact</Link></li>
					<li><Link to="/" onClick={this.logout}>Logout</Link></li>
				</ul>
			</div>)
		} else {
			return (<div style={style}>
					{errorMessage}
				   </div>)
		}
	}
}

const mapStateToProps = (state) => {
	return {
		isLogged:state.isLogged,
		loading:state.loading,
		error:state.error,
		token:state.token
	}
}

export default connect(mapStateToProps)(NavBar);
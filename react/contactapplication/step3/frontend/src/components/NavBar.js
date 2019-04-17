import React from 'react'
import {Link} from 'react-router-dom';

const NavBar = ({isLogged})=> {
	let style = {
		"height":100,
		"backgroundColor":"lightblue"
	}
	if(isLogged) {
		return <div style={style}>
			<ul>
				<li><Link to="/list">Contacts</Link></li>
				<li><Link to="/contact">Add Contact</Link></li>
				<li><Link to="/">Logout</Link></li>
			</ul>
		</div>
	} else {
		return <div style={style}>
			   </div>
	}
	
}

export default NavBar;
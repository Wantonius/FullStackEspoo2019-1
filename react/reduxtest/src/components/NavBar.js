import React from 'react';
import {Link} from 'react-router-dom'
import {List} from 'semantic-ui-react';

export default class NavBar extends React.Component {
	
	//Could be a functional component
	
	render() {
		return(
			<List>
				<List.Item><Link to="/">Shopping List</Link></List.Item>
				<List.Item><Link to="/form">Add to List</Link></List.Item>
			</List>
		)
	}
}

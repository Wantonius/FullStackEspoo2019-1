import React from 'react';
import {Table,Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {removeFromList} from '../actions/ContactActions';

class ContactList extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			removeId:""
		}
	}
	
	remove = (event) => {
		let id = event.target.name;
		if(this.state.removeId === id) {
			this.props.dispatch(removeFromList(id,this.props.token))
			this.setState({
				removeId:""
			})		
			return;
		} 
		if(this.state.removeId.length > 0) {
			this.setState({
				removeId:""
			})
			return;
		}
		this.setState({
			removeId:id
		});
	}
	
	render() {
		let contacts = this.props.contactList.map(contact => {
			let link = "/contact/"+contact._id
			let color = "gray";
			let text = "Remove";
			if(this.state.removeId.length > 0) {
				text = "Cancel";
			}
			if(contact._id === this.state.removeId) {
				color = "red";
				text = "Confirm";
			}
			let style = {
				backgroundColor:color
			}
			return <Table.Row key={contact._id}>
						<Table.Cell>{contact.title}</Table.Cell>
						<Table.Cell><Link to={link}>{contact.name} {contact.surname}</Link></Table.Cell>
						<Table.Cell>{contact.phone[0]}</Table.Cell>
						<Table.Cell>{contact.mobile[0]}</Table.Cell>
						<Table.Cell>{contact.email[0]}</Table.Cell>
						<Table.Cell><Button onClick={this.remove}
							name={contact._id}
							style={style}
						>{text}</Button></Table.Cell>
					</Table.Row>
		})
		return (
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Title</Table.HeaderCell>
						<Table.HeaderCell>Name</Table.HeaderCell>
						<Table.HeaderCell>Main phone</Table.HeaderCell>
						<Table.HeaderCell>Main mobile</Table.HeaderCell>
						<Table.HeaderCell>Main email</Table.HeaderCell>
						<Table.HeaderCell>Remove</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
				{contacts}
				</Table.Body>
			</Table>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		contactList:state.contacts.list,
		token:state.login.token
	}
}

export default connect(mapStateToProps)(ContactList);
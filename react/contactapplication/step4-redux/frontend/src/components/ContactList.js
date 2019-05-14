import React from 'react';
import {Table} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class ContactList extends React.Component {
	render() {
		let contacts = this.props.contactList.map(contact => {
			let link = "/contact/"+contact._id
			return <Table.Row key={contact._id}>
						<Table.Cell>{contact.title}</Table.Cell>
						<Table.Cell><Link to={link}>{contact.name} {contact.surname}</Link></Table.Cell>
						<Table.Cell>{contact.phone[0]}</Table.Cell>
						<Table.Cell>{contact.mobile[0]}</Table.Cell>
						<Table.Cell>{contact.email[0]}</Table.Cell>
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
						<Table.HeaderCell>Mail email</Table.HeaderCell>
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
		contactList:state.contacts.list
	}
}

export default connect(mapStateToProps)(ContactList);
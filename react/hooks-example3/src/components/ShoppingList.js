import React from 'react'
import {Table,Button} from 'semantic-ui-react';

const ShoppingList = ({list,removeFromList}) => {

	let items = list.map((item,index) => {
		return  <Table.Row key={index}>
					<Table.Cell>{item.type}</Table.Cell>
					<Table.Cell>{item.count}</Table.Cell>
					<Table.Cell>{item.price}</Table.Cell>
					<Table.Cell><Button onClick={()=>removeFromList(index)}>Remove</Button></Table.Cell>
				</Table.Row>	
	})

	return (
		<Table>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Type</Table.HeaderCell>
					<Table.HeaderCell>Count</Table.HeaderCell>
					<Table.HeaderCell>Price</Table.HeaderCell>
					<Table.HeaderCell>Remove</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
			{items}
			</Table.Body>
		</Table>
	)
}

export default ShoppingList;
import React from 'react';
import {Table,Button} from 'semantic-ui-react';

export const NormalRow = ({item,remove,edit}) => {
	return <Table.Row>
				<Table.Cell>{item.firstname}</Table.Cell>
				<Table.Cell>{item.lastname}</Table.Cell>
				<Table.Cell>{item.address}</Table.Cell>
				<Table.Cell>{item.email}</Table.Cell>
				<Table.Cell>{item.phone}</Table.Cell>
				<Table.Cell>
					<Button onClick={()=>remove(item.id)}>
						Remove
					</Button>
				</Table.Cell>
				<Table.Cell>
					<Button onClick={()=>edit(item.id)}>
						Edit
					</Button>
				</Table.Cell>				
			</Table.Row>

}
import React from 'react';
import {Table,Button} from 'semantic-ui-react';

export const RemoveRow = ({item,remove,cancel}) => {
	let buttonStyle={
		backgroundColor:"red"
	}
	return <Table.Row>
				<Table.Cell>{item.firstname}</Table.Cell>
				<Table.Cell>{item.lastname}</Table.Cell>
				<Table.Cell>{item.address}</Table.Cell>
				<Table.Cell>{item.email}</Table.Cell>
				<Table.Cell>{item.phone}</Table.Cell>
				<Table.Cell>
					<Button style={buttonStyle}
						onClick={()=>remove(item.id)}>
						Confirm
					</Button>
				</Table.Cell>
				<Table.Cell>
					<Button	style={buttonStyle} 
						onClick={()=>cancel()}>
						Cancel
					</Button>
				</Table.Cell>				
			</Table.Row>

}
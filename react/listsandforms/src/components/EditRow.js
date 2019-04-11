import React from 'react';
import {Table,Button} from 'semantic-ui-react';

export const EditRow = ({item,save,cancel,onChange,firstname,lastname,address,email,phone}) => {
	return (
		<Table.Row>
			<Table.Cell>
				<input type="text"
					   name="firstname"
					   onChange={(e) => onChange(e)}
					   value={firstname}/>
			</Table.Cell>
			<Table.Cell>
				<input type="text"
					   name="lastname"
					   onChange={(e) => onChange(e)}
					   value={lastname}/>
			</Table.Cell>
			<Table.Cell>
				<input type="text"
					   name="address"
					   onChange={(e) => onChange(e)}
					   value={address}/>
			</Table.Cell>
			<Table.Cell>
				<input type="email"
					   name="email"
					   onChange={(e) => onChange(e)}
					   value={email}/>
			</Table.Cell>	
			<Table.Cell>
				<input type="text"
					   name="phone"
					   onChange={(e) => onChange(e)}
					   value={phone}/>
			</Table.Cell>
			<Table.Cell>
				<Button onClick={() => save(item.id)}
					style={{backgroundColor:"green"}}>
					Save
				</Button>
			</Table.Cell>
			<Table.Cell>
				<Button onClick={() => cancel()}
					style={{backgroundColor:"red"}}>
					Cancel
				</Button>
			</Table.Cell>
		</Table.Row>
	)
}

export default EditRow;
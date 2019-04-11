import React from 'react';

export const FunctionalHello = ({name}) => {
	let tempName = "World"
	if(name) {
		 tempName = name
	}
	return <h1>Hello {tempName} from Functional Component</h1>
}
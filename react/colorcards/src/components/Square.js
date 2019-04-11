import React from 'react';

export const Square = ({color}) => {
	let squareStyle = {
			height:150,
			backgroundColor:color
	}
	return (
		<div style={squareStyle}/>
	)
}
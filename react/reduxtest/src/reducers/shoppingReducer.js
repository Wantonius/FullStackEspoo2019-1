const initialState = {
	list:[],
	id:100
}

const shoppingReducer = (state = initialState, action) => {
		console.log("ShoppingReducer: action:"+action.type);
		let tempState = {};
		switch(action.type) {
			case "ADD_TO_LIST": 
				let item = action.item;
				item.id = state.id+1;
				let tempList = state.list.concat(item);
				tempState = {
					list:tempList,
					id:item.id
				}
				return tempState;
			default:
				return state;
		}
}

export default shoppingReducer;
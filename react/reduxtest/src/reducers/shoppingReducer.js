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
			case "REMOVE_FROM_LIST":
				let id = parseInt(action.id,10);
				let tempList2=[];
				for(let i=0;i<state.list.length;i++) {
					if(state.list[i].id !== id) {
						tempList2.push(state.list[i]);
					}
				}
				tempState = {
					list:tempList2,
					id:state.id
				}
				return tempState;
			default:
				return state;
		}
}

export default shoppingReducer;
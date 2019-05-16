import React,{useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './components/ShoppingList';
import ShoppingForm from './components/ShoppingForm';

const initialState = {
	list:[]
}

const listReducer = (state,action) => {
	let tempList = [];
	switch(action.type) {
		case "ADD_TO_LIST":
			tempList = state.list.concat(action.item);
			return {
				list:tempList
			}
		case "REMOVE_FROM_LIST":
			tempList = state.list;
			tempList.splice(action.index,1);
			return {
				list:tempList
			}
		default:
			return state;
	}
}

function App() {
	const [state,dispatch] = useReducer(listReducer,initialState);

	const addToList = (item) => {
		dispatch({type:"ADD_TO_LIST",item:item})
	}
	
	const removeFromList = (index) => {
		dispatch({type:"REMOVE_FROM_LIST",index:index})
	}
	
  return (
    <div className="App">
		<ShoppingForm addToList={addToList}/>
		<hr/>
		<ShoppingList list={state.list} removeFromList={removeFromList}/>
    </div>
  );
}

export default App;

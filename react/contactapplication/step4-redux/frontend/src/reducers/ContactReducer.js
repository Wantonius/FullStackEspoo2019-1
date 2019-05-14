import {
	CONTACTS_LOADING,
	CONTACTS_FETCH_SUCCESS,
	CONTACTS_FETCH_FAILED,
	CONTACTS_ADD_SUCCESS,
	CONTACTS_ADD_FAILED } from '../actions/ContactActions';
	
	
const getInitialStateFromStorage = () => {
	if(sessionStorage.getItem("contactState")) {
		let state = JSON.parse(sessionStorage.getItem("contactState"));
		return state;
	} else {
		return {
			list:[],
			loading:false,
			error:""
		}
	}
}

const saveStateToStorage = (state) => {
	sessionStorage.setItem("contactState",JSON.stringify(state));
}

const initialState = getInitialStateFromStorage();

const contactReducer = (state = initialState, action) => {
	let tempState = {};
	switch(action.type) {
		case CONTACTS_LOADING:
			tempState = {
				...state,
				loading:true
			}
			return tempState;
		case CONTACTS_FETCH_SUCCESS:
			tempState = {
				loading:false,
				list:action.list,
				error:""
			}
			saveStateToStorage(tempState);
			return tempState;
		case CONTACTS_FETCH_FAILED: 
			tempState = {
				loading:false,
				list:[],
				error:action.error
			}
			saveStateToStorage(tempState);
			return tempState;
		case CONTACTS_ADD_SUCCESS:
			tempState = {
				...state,
				loading:false,
				error:""
			}
			saveStateToStorage(tempState);
			return tempState;
		case CONTACTS_ADD_FAILED:
			tempState = {
				...state,
				loading:false,
				error:action.error
			}
			saveStateToStorage(tempState);
			return tempState;		
		default:
			return state;
	}
}

export default contactReducer;
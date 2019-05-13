import {
	LOGIN_LOADING,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	REGISTER_SUCCESS,
	REGISTER_FAILED
} from '../actions/LoginActions';


const getInitialStateFromStorage = () => {
	if(sessionStorage.getItem("loginstate")) {
		let loginstate = JSON.parse(sessionStorage.getItem("loginstate"));
		return loginstate;
	} else {
		return {
			loading:false,
			isLogged:false,
			token:"",
			error:""
		}
	}
}

const saveLoginState = (state) => {
	sessionStorage.setItem("loginstate",JSON.stringify(state));
}

const initialState = getInitialStateFromStorage();

const loginReducer = (state=initialState, action) => {
	let tempState = {};
	switch(action.type) {
		case LOGIN_LOADING:
			return {
				...state,
				error:"",
				loading:true
			}
		case REGISTER_SUCCESS:
		    tempState = {
				...state,
				error:"",
				loading:false
			}
			saveLoginState(tempState);
			return tempState;
		case REGISTER_FAILED:
			tempState = {
				...state,
				error:action.error,
				loading:false
			}
			saveLoginState(tempState);
			return tempState;
		case LOGIN_SUCCESS:
			tempState =  {
				isLogged:true,
				token:action.token,
				error:"",
				loading:false
			}
			saveLoginState(tempState);
			return tempState;
		case LOGIN_FAILED:
			tempState = {
				...state,
				error:action.error,
				loading:false
			}
			saveLoginState(tempState);
			return tempState;
		default:
			return state
	}
}

export default loginReducer;
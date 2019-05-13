import {
	LOGIN_LOADING,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	REGISTER_SUCCESS,
	REGISTER_FAILED
} from '../actions/LoginActions';


const initialState = {
	loading:false,
	isLogged:false,
	token:"",
	error:""
}

const loginReducer = (state=initialState, action) => {
	switch(action.type) {
		case LOGIN_LOADING:
			return {
				...state,
				error:"",
				loading:true
			}
		case REGISTER_SUCCESS:
			return {
				...state,
				error:"",
				loading:false
			}
		case REGISTER_FAILED: 
			return {
				...state,
				error:action.error,
				loading:false
			}
		default:
			return state
	}
}

export default loginReducer;
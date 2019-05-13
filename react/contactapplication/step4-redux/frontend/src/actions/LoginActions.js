//ACTION CONSTANTS

export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

//ACTIONS

export const onRegister = (user) => {
	return dispatch => {
	  let request = {
		  method:"POST",
		  mode:"cors",
		  headers:{"Content-Type":"application/json"},
		  body:JSON.stringify(user)
	  }
	  dispatch(loginLoading());
	  fetch("/register",request).then(response => {
		if(response.ok) {
			alert("Register success!");
			dispatch(registerSuccess());
		} else {
			alert("Register failed! Is username already in use?");
			dispatch(registerFailed(response.statusText));
		}
	  }).catch(error => {
		console.log(error); 
		dispatch(registerFailed(error));		
	  })
	  
	}
}


//ACTION CREATORS

export const loginLoading = () => {
	return {
		type:LOGIN_LOADING
	}
}

export const registerSuccess = () => {
	return {
		type:REGISTER_SUCCESS
	}
}

export const registerFailed = (error) => {
	return {
		type:REGISTER_FAILED,
		error:error
	}
}
//ACTION CONSTANTS

export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

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

export const onLogin = (user) => {
	return dispatch => {
	  let request = {
		  method:"POST",
		  mode:"cors",
		  headers:{"Content-Type":"application/json"},
		  body:JSON.stringify(user)
	  }
	  dispatch(loginLoading())
	  fetch("/login",request).then(response => {
		if(response.ok) {
			response.json().then(data => {
				dispatch(loginSuccess(data.token))
			}).catch(error => {
				dispatch(loginFailed("User info parsing failed:"+error));
			});
		} else {
			dispatch(loginFailed("Login returned with status:"+response.status));
		}
	  }).catch(error => {
		dispatch(loginFailed(error));  
	  });	 		
	}
}

export const onLogout = (token) => {
	return dispatch => {
		let request = {
		  method:"POST",
		  mode:"cors",
		  headers:{"Content-Type":"application/json",
				   "token":token}			
		}
		dispatch(loginLoading());
		fetch("/logout",request).then(response => {
			if(response.ok) {
				dispatch(logoutSuccess());
			} else {
				dispatch(logoutFailed("Server responded with an error. Logging out."));
			}
		}).catch(error => {
			dispatch(logoutFailed("Server responded with an error. Logging out."));	
		});
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

export const loginSuccess = (token) => {
	return {
		type:LOGIN_SUCCESS,
		token:token
	}
}

export const loginFailed = (error) => {
	return {
		type:LOGIN_FAILED,
		error:error
	}
}

export const logoutSuccess = () => {
	return {
		type:LOGOUT_SUCCESS
	}
}

export const logoutFailed = (error) => {
	return {
		type:LOGOUT_FAILED,
		error:error
	}
}
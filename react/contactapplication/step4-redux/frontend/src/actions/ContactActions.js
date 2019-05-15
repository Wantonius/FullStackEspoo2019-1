import {logoutSuccess} from './LoginActions';

export const CONTACTS_LOADING = "CONTACTS_LOADING";
export const CONTACTS_FETCH_SUCCESS = "CONTACTS_FETCH_SUCCESS"
export const CONTACTS_FETCH_FAILED = "CONTACTS_FETCH_FAILED"
export const CONTACTS_ADD_SUCCESS = "CONTACTS_ADD_SUCCESS"
export const CONTACTS_ADD_FAILED = "CONTACTS_ADD_FAILED"
export const CONTACTS_REMOVE_SUCCESS = "CONTACTS_REMOVE_SUCCESS"
export const CONTACTS_REMOVE_FAILED = "CONTACTS_REMOVE_FAILED"
export const CONTACTS_EDIT_SUCCESS = "CONTACTS_EDIT_SUCCESS"
export const CONTACTS_EDIT_FAILED = "CONTACTS_EDIT_FAILED"
export const CLEAR_CONTACTS_STATE = "CLEAR_CONTACTS_STATE"
// Actions

export const getList = (token) => {
	return dispatch => {
		let request = {
		  method:"GET",
		  mode:"cors",
		  headers:{"Content-Type":"application/json",
			       "token":token}
		  }
		  dispatch(contactsLoading());
		  fetch("/api/contact",request).then(response => {
			  if(response.ok) {
				  response.json().then(data => {
					  dispatch(contactsFetchSuccess(data.data));
				  }).catch(error => {
					  dispatch(contactsFetchFailed("JSON parsing of contacts list failed"));
				  })
			  } else {
					if(response.status === 403) {
						dispatch(contactsFetchFailed("Server responded with session mismatch. Logging out."));
						dispatch(logoutSuccess());
					} else {
						dispatch(contactsFetchFailed("Server responded with an error status:"+response.statusText));
					}
			  }
		  }).catch(error => {
				dispatch(contactsFetchFailed("Server responded with an error"));
		  })		
		}
}

export const addToList = (contact,token) => {
	return dispatch => {
	  let request = {
		  method:"POST",
		  mode:"cors",
		  headers:{"Content-Type":"application/json",
				   "token":token},
		  body:JSON.stringify(contact)
	  }
	  dispatch(contactsLoading());
	  fetch("/api/contact",request).then(response => {
		  if(response.ok) {
			  dispatch(contactsAddSuccess());
			  dispatch(getList(token));
		  } else {
			  if(response.status === 403) {
				  dispatch(contactsAddFailed("Server responded with a session mismatch. Logging out"));
				  dispatch(logoutSuccess());
			  } else {
				  dispatch(contactsAddFailed("Server responded with an error status:"+response.statusText));				  
			  }
		  }
	  }).catch(error => {
			dispatch(contactsAddFailed("Server responded with an error:"+error));
	  })		
	}
}

export const removeFromList = (id, token) => {
	return dispatch => {
	  let request = {
		  method:"DELETE",
		  mode:"cors",
		  headers:{"Content-Type":"application/json",
				   "token":token}
	  }
	  dispatch(contactsLoading());
	  let url = "/api/contact/"+id;
	  fetch(url,request).then(response => {
		  if(response.ok) {
			  dispatch(contactsRemoveSuccess());
			  dispatch(getList(token));
		  } else {
			if(response.status === 403) {
				dispatch(contactsRemoveFailed("Server responded with a session mismatch. Logging out."));
				dispatch(logoutSuccess());
			} else {
				dispatch(contactsRemoveFailed("Server responded with an error:"+response.statusText));				
			}
		  }
	  }).catch(error => {
				dispatch(contactsRemoveFailed("Server responded with an error:"+error));			  
	  })
	}
}

export const editContact = (contact,id,token) => {
	return dispatch => {
		let request = {
			method:"PUT",
			mode:"cors",
			headers:{"Content-Type":"application/json",
				   "token":token},
			body:JSON.stringify(contact)
		}
		let url = "/api/contact/"+id;
		dispatch(contactsLoading());
		fetch(url,request).then(response =>{
			if(response.ok) {
				dispatch(editContactSuccess());
				dispatch(getList(token));
			} else {
				if(response.status === 403) {
					dispatch(editContactFailed("Server responded with a session mismatch. Logging Out."));
					dispatch(logoutSuccess());
				} else {
					dispatch(editContactFailed("Server responded with an error:"+response.statusText));
				}
			}
		}).catch(error => {
				dispatch(editContactFailed("Server responded with an error:"+error));			
		});
	}
}

// Action Creators

export const contactsLoading = () => {
	return {
		type:CONTACTS_LOADING
	}
}

export const contactsFetchSuccess = (list) => {
	return {
		type:CONTACTS_FETCH_SUCCESS,
		list:list
	}
}

export const contactsFetchFailed = (error) => {
	return {
		type:CONTACTS_FETCH_FAILED,
		error:error
	}
}

export const contactsAddSuccess = () => {
	return {
		type:CONTACTS_ADD_SUCCESS
	}
}

export const contactsAddFailed = (error) => {
	return {
		type:CONTACTS_ADD_FAILED,
		error:error
	}
}

export const contactsRemoveSuccess = () => {
	return {
		type:CONTACTS_REMOVE_SUCCESS
	}
}

export const contactsRemoveFailed = (error) => {
	return {
		type:CONTACTS_REMOVE_FAILED,
		error:error
	}
}

export const editContactSuccess = () => {
	return {
		type:CONTACTS_EDIT_SUCCESS
	}
}

export const editContactFailed = (error) => {
	return {
		type:CONTACTS_EDIT_FAILED,
		error:error
	}
}

export const clearContactsState = () => {
	return {
		type:CLEAR_CONTACTS_STATE
	}
}
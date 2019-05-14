import {logoutSuccess} from './LoginActions';

export const CONTACTS_LOADING = "CONTACTS_LOADING";
export const CONTACTS_FETCH_SUCCESS = "CONTACTS_FETCH_SUCCESS"
export const CONTACTS_FETCH_FAILED = "CONTACTS_FETCH_FAILED"
export const CONTACTS_ADD_SUCCESS = "CONTACTS_ADD_SUCCESS"
export const CONTACTS_ADD_FAILED = "CONTACTS_ADD_FAILED"

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
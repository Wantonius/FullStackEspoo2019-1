import React,{useReducer,useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './components/ShoppingList';
import ShoppingForm from './components/ShoppingForm';


const initialState = {
	list:[],
	loading:false
}

const listReducer = (state,action) => {
	let tempState = {};
	switch(action.type) {
		case "FETCH_LOADING":
			tempState = {
				...state,
				loading:true
			}
			return tempState;
		case "FETCH_DONE":
			tempState = {
				...state,
				loading:false
			}
			return tempState;
		case "LIST_LOADED": 
			tempState = {
				list:action.list,
				loading:false
			}
			return tempState;
		default:
			return state;
	}
}

function App() {
	const [state,dispatch] = useReducer(listReducer,initialState);
	const [urlRequest,setUrlRequest] = useState({
		url:"",
		request:{}
	});
	
	useEffect(() => {		
		const fetchData = async () => {
			dispatch({type:"FETCH_LOADING"});
			try {
				const response = await fetch(urlRequest.url,urlRequest.request);
				if(response.ok) {
					if(urlRequest.request.method === "GET") {
						const data = await response.json();
						dispatch({type:"LIST_LOADED",list:data})
					} else {
						dispatch({type:"FETCH_DONE"});
						getList();
					}
				} else {
					console.log("Server responded with status:"+response.status);
				}
			} catch(error) {
				console.log(error);
			}
		}
		
		fetchData();
	
	},[urlRequest]);

	const getList = () => {
		setUrlRequest({
			url:"/api/shopping",
			request: {
				method:"GET",
				mode:"cors",
				headers:{"Content-type":"application/json"}				
			}
		})
	}

	const addToList = (item) => {
		setUrlRequest({
		    url:"/api/shopping",
				request:{
				method:"POST",
				mode:"cors",
				headers:{"Content-type":"application/json"},
				body:JSON.stringify(item)
			}
		})
	}
	
	const removeFromList = (id) => {
		setUrlRequest({
		    url:"/api/shopping/"+id,
			request:{
				method:"DELETE",
				mode:"cors",
				headers:{"Content-type":"application/json"}
			}
		})
	}

	
	let ui = <h3>Shopping List app</h3>
	if(state.loading) {
		ui = <h3>Shopping List app...Loading</h3>
	}
	
  return (
    <div className="App">
		{ui}
		<ShoppingForm addToList={addToList}/>
		<hr/>
		<ShoppingList list={state.list} removeFromList={removeFromList}/>
    </div>
  );
}

export default App;

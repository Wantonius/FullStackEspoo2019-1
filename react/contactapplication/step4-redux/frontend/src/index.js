import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import LoginReducer from './reducers/LoginReducer';
import ContactReducer from './reducers/ContactReducer';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

const rootReducer = combineReducers({
	login:LoginReducer,
	contacts:ContactReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
<App />
</BrowserRouter>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import ShoppingList from './components/ShoppingList';
import ShoppingForm from './components/ShoppingForm';
import './App.css';

function App() {
  return (
    <div className="App">
		<NavBar/>
		<hr/>
		<Switch>
			<Route exact path="/" render={() => 
				<ShoppingList/>
			}/>
			<Route path="/form" render={() => 
				<ShoppingForm/>
			}/>
		</Switch>
    </div>
  );
}

export default App;

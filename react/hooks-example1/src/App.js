import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './components/ShoppingList';
import ShoppingForm from './components/ShoppingForm';

class App extends React.Component {
  
  constructor(props) {
	  super(props);
	  this.state = {
		  list:[]
	  }
  }
  
  addToList = (item) => {
	  let tempList = this.state.list.concat(item);
	  this.setState({
		  list:tempList
	  })
  }
  
  removeFromList = (index) => {
	  let tempList = this.state.list;
	  tempList.splice(index,1);
	  this.setState({
		  list:tempList
	  })	  
  }
  
  render() {
	  return (
		<div className="App">
			<ShoppingForm addToList={this.addToList}/>
			<hr/>
			<ShoppingList list={this.state.list}
					removeFromList={this.removeFromList}/>
		</div>
	  );
  }
}

export default App;

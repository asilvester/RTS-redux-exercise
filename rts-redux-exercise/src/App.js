// this is the parent component

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Searchbar from './Components/Searchbar/searchbar';
import SearchHistory from './Components/SearchHistory/searchHistory';
import SearchResults from './Components/SearchResults/searchResults';


class App extends Component {
  state = {
    ninjas:[
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }

  addNinja = (ninja) => {
    console.log(ninja)
    // ninja.id = Math.random();
    // let ninjas = [...this.state.ninjas, ninja];
    // this.setState({
    //   ninjas: ninjas
    // });
  }
  

  testfunction = (message) => {
    console.log(message)
  }

  render(){
    console.log('app.js is rendered')
    return (
      <div className='App'>
        {/*child components*/}
        <Searchbar /> 
        <SearchResults searchResults={this.state.ninjas}/>
        <SearchHistory addNinja={this.addNinja} testfunction={this.testfunction} />
      </div>
    );
  }
} 

export default App;



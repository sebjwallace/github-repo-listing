import React, { Component } from 'react';
import './App.scss';

import Search from './components/Search';
import List from './components/List';

class App extends Component {

  constructor(props){

    super(props);

    this.state = {
      repos: []
    };

  }

  handleSubmit = async ({ userName, type, sort }) => {
    const response = await fetch(`http://localhost:3000/users/${userName}?type=${type}&sort=${sort}&direction=asc`);
    const repos = await response.json();
    this.setState({repos});
  }
  
  render(){

    return <div className="App">
      <div>
        <Search onSubmit={this.handleSubmit}/>
        <List repos={this.state.repos}/>
      </div>
    </div>

  }

}

export default App;

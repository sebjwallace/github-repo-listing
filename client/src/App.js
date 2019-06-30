import React, { Component } from 'react';
import './App.scss';

import SearchList from './containers/SearchList';

class App extends Component {

  constructor(props){

    super(props);

  }
  
  render(){

    return <div className="App">
      <SearchList/>
    </div>

  }

}

export default App;

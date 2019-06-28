import React, { Component } from 'react';
import './App.scss';

import Search from './components/Search';
import List from './components/List';
import Pagination from './components/Pagination';

class App extends Component {

  constructor(props){

    super(props);

    this.state = {
      repos: [],
      pages: 0
    };

  }

  handleChange = async () => {
    const { search, pagination } = this.refs;
    const { userName, type, sort } = search.state;
    const { currentPage } = pagination.state;
    const response = await fetch(`http://localhost:3000/repos/${userName}?type=${type}&sort=${sort}&direction=asc&page=${currentPage}`);
    const { repos, pages } = await response.json();
    this.setState({repos, pages});
  }
  
  render(){

    const { repos, pages } = this.state;

    return <div className="App">
      <div>
        <Search onSubmit={this.handleChange} ref="search"/>
        <List repos={repos}/>
        <Pagination lastPage={pages} range={2} onChange={this.handleChange} ref="pagination"/>
      </div>
    </div>

  }

}

export default App;

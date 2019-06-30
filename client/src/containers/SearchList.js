import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestRepos } from '../actions';

import Search from '../components/Search';
import List from '../components/List';
import Pagination from '../components/Pagination';

class SearchList extends Component {

  constructor(props){
    super(props);
  }

  handleSubmit = async ({userName, type, sort}) => {

    const { requestRepos } = this.props;
    requestRepos({ userName, type, sort });
  
  }

  render(){

    const { loadingRepos, repos } = this.props;

    return <div>
      <div>
        <Search onSubmit={this.handleSubmit}/>
        <List repos={repos}/>
        <Pagination lastPage={0} range={2} onChange={(e) => console.log(e)}/>
      </div>
    </div>

  }

}

export default connect(
  state => ({...state}),
  { requestRepos }
)(SearchList);

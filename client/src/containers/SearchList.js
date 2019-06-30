import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestRepos } from '../actions';

import Header from '../components/Header';
import Search from '../components/Search';
import List from '../components/List';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';

class SearchList extends Component {

  handleSubmit = async ({ userName, type, sort }) => {
    const { requestRepos } = this.props;
    requestRepos({ userName, type, sort });
  }
  
  handlePageChange = (page) => {
    const { requestRepos } = this.props;
    const { userName, type, sort } = this.props;
    requestRepos({ userName, type, sort, page });
  }

  render(){

    const { loadingRepos, repos, pages } = this.props;

    return <div>
      <div>
        <Header title="Github Repositories">
          <Search disable={loadingRepos} onSubmit={this.handleSubmit}/>
        </Header>
        <Loading isLoading={loadingRepos}>
          <List repos={repos}/>
          {!!repos.length && <Pagination
            lastPage={pages}
            range={2}
            onChange={this.handlePageChange}
          />}
        </Loading>
      </div>
    </div>

  }

}

export default connect(
  state => ({...state}),
  { requestRepos }
)(SearchList);

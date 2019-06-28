import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions';

import Search from '../components/Search';
import List from '../components/List';
import Pagination from '../components/Pagination';

const SearchList = ({ setUser }) => <div>
  <div>
    <Search onSubmit={e => console.log(e)}/>
    <List repos={[]}/>
    <Pagination lastPage={0} range={2} onChange={e => console.log(e)}/>
  </div>
</div>

export default connect(
  state => ({...state}),
  { setUser }
)(SearchList);

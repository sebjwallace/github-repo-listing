import React, { Component } from 'react';
import Repo from './Repo';
import Pagination from './Pagination';

 class List extends Component {

  constructor(props){

    super(props);

  }

  render(){

    const { repos } = this.props;

    return <div>
      {repos.map(({
        id,
        name,
        description,
        stargazers_count,
        owner: { login }
      }) => <div key={id}>
        <Repo
          id={id}
          name={name}
          stars={stargazers_count}
          description={description}
          owner={login}
        />
      </div>)}
      <Pagination lastPage={20} range={2}/>
    </div>

  }

 }

 export default List;
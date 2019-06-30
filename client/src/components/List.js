import React from 'react';
import Repo from './Repo';
import './List.scss';

const List = ({ repos }) => <div className="List">{
  repos.map(({
    id,
    name,
    description,
    git_url,
    stargazers_count,
    forks_count,
    owner: { login }
  }) => <div key={id} className="container">
    <Repo
      id={id}
      name={name}
      stars={stargazers_count}
      forks={forks_count}
      description={description}
      owner={login}
      url={git_url}
    />
  </div>)
}</div>

 export default List;
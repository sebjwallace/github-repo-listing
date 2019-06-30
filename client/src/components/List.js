import React from 'react';
import Repo from './Repo';

const List = ({ repos }) => <div>{
  repos.map(({
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
  </div>)
}</div>

 export default List;
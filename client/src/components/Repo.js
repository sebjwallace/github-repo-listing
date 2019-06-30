import React from 'react';
import { GoStar, GoRepo, GoRepoForked } from 'react-icons/go';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Repo.scss';

const Repo = ({ name, stars, forks, description, url }) => <div className="Repo">
  <div className="title">
    <GoRepo/>
    <span>
      <b> { name }</b>
    </span>
    <span className="pull-right">
      <a href={url} target="_blank">
        <FaExternalLinkAlt/>
      </a>
    </span>
    <span className="pull-right">
      <span className={stars ? '' : 'fade'}>
        <GoStar/>
      </span>
      <b> { stars || '' } </b>
    </span>
    <span className="pull-right">
      <span className={forks ? '' : 'fade'}>
        <GoRepoForked/>
      </span>
      <b> { forks || '' } </b>
    </span>
  </div>
  <div className="description">
    <div>
      { description }
    </div>
  </div>
</div>

export default Repo;
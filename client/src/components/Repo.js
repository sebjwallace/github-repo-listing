import React, { Component } from 'react';
import { GoStar } from "react-icons/go";
import './Repo.scss';

 class Repo extends Component {

  constructor(props){

    super(props);

    this.state = {
      expanded: false
    };

  }

  handleTitleClick = () => {
    this.setState({expanded: !this.state.expanded});
  }

  render(){

    const { name, owner, stars, description } = this.props;
    const { expanded } = this.state;

    return <div className="Repo">
      <div className="title" onClick={this.handleTitleClick}>
        <span>
          { owner } / <b>{ name }</b>
        </span>
        {!!stars && <span className="stars">
          <b>{ stars } </b>
          <GoStar/>
        </span>}
      </div>
      <div className="description">
        <div className={expanded ? 'expanded' : 'hidden'}>
          { description }
        </div>
      </div>
    </div>

  }

 }

 export default Repo;
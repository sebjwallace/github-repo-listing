import React, { Component } from 'react';
import './Pagination.scss';

 class Pagination extends Component {

  constructor(props){

    super(props);

    this.state = {
      currentPage: 0
    };

  }

  handlePrevClick = () => {
    const { currentPage } = this.state;
    const hasHitLimit = currentPage === 0;
    this.setState({currentPage: hasHitLimit ? currentPage : currentPage - 1});
  }

  handleNextClick = () => {
    const { currentPage } = this.state;
    const { lastPage } = this.props;
    const hasHitLimit = currentPage + 1 === lastPage;
    this.setState({currentPage: hasHitLimit ? currentPage : currentPage + 1});
  }

  render(){

    const { lastPage, range } = this.props;
    const { currentPage } = this.state;
    const end = lastPage - range * 2 - 1

    return <div className="Pagination">
      <button className="button" onClick={this.handlePrevClick}>back</button>
      {
        Array
          .from({length: lastPage}, (v,i) => i)
          .filter(i =>
            (currentPage > end && i >= end) ||
            (i - range >= currentPage - range &&
            i - range <= currentPage + range)
          )
          .map(i => <div className="button numbered" key={i}>
            <span className={ i === currentPage && 'current'}>
              {i+1}
            </span>
          </div>)
      }
      <button className="button" onClick={this.handleNextClick}>next</button>
    </div>

  }

 }

 export default Pagination;
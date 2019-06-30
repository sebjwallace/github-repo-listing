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
    const { onChange } = this.props;
    const hasHitLimit = currentPage === 0;
    this.setState({currentPage: hasHitLimit ? currentPage : currentPage - 1});
    onChange && onChange(currentPage);
  }
  
  handleNextClick = () => {
    const { currentPage } = this.state;
    const { lastPage, onChange } = this.props;
    const hasHitLimit = currentPage + 1 === lastPage;
    this.setState({currentPage: hasHitLimit ? currentPage : currentPage + 1});
    onChange && onChange(currentPage);
  }

  render(){

    const { lastPage, range } = this.props;
    const { currentPage } = this.state;

    const isFirstPage = currentPage === 0;
    const isLastPage = currentPage === lastPage;
    const end = lastPage - range * 2 - 1;

    return <div className="Pagination">
      <button className="button" disabled={isFirstPage} onClick={this.handlePrevClick}>
        back
      </button>
      {
        Array
          .from({length: lastPage}, (v,i) => i)
          .filter(i =>
            (currentPage <= range && i <= range * 2) ||
            (i >= currentPage - range && i <= currentPage + range) ||
            (currentPage >= lastPage - range && i >= end)
          )
          .map(i => <div className="button numbered" key={i}>
            <span className={ i === currentPage && 'current'}>
              {i+1}
            </span>
          </div>)
      }
      <button className="button" disabled={isLastPage} onClick={this.handleNextClick}>
        next
      </button>
    </div>

  }

 }

 export default Pagination;
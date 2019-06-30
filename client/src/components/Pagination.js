import React, { Component } from 'react';
import {
  FiChevronsLeft,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsRight
} from "react-icons/fi";
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
    const { onChange } = this.props;
    const nextPage = currentPage + 1;
    this.setState({currentPage: nextPage});
    onChange && onChange(nextPage + 1);
  }

  handleNumberClick = page => {
    const { onChange } = this.props;
    this.setState({currentPage: page});
    onChange && onChange(page + 1);
  }

  render(){

    const { lastPage, range } = this.props;
    const { currentPage } = this.state;

    const isFirstPage = currentPage === 0;
    const isLastPage = currentPage === lastPage - 1;
    const end = lastPage - range * 2 - 1;

    return <div className="Pagination">
      <button disabled={isFirstPage} onClick={() => this.handleNumberClick(0)}>
        <FiChevronsLeft/>
      </button>
      <button disabled={isFirstPage} onClick={this.handlePrevClick}>
        <FiChevronLeft/>
      </button>
      {
        Array
          .from({length: lastPage}, (v,i) => i)
          .filter(i =>
            (currentPage <= range && i <= range * 2) ||
            (i >= currentPage - range && i <= currentPage + range) ||
            (currentPage >= lastPage - range && i >= end)
          )
          .map(i => <button
              onClick={() => this.handleNumberClick(i)}
              key={i}
            >
              <span className={ i === currentPage && 'current'}>
                {i+1}
              </span>
          </button>)
      }
      <button disabled={isLastPage} onClick={this.handleNextClick}>
        <FiChevronRight/>
      </button>
      <button disabled={isLastPage} onClick={() => this.handleNumberClick(lastPage-1)}>
        <FiChevronsRight/>
      </button>
    </div>

  }

 }

 export default Pagination;
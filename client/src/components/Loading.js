import React from 'react';
import './Loading.scss';

const Loading = ({ children, isLoading }) => <div className="Loading">
  <div className={isLoading ? 'disable' : ''}>
    { isLoading ? 'loading...' : '' }
    { children }
  </div>
</div>

export default Loading;
import React from 'react';
import './App.scss';

import Search from './components/Search';

function App() {
  return <div className="App">
    <div>
      <Search onSubmit={e => console.log(e)}/>
    </div>
  </div>
}

export default App;

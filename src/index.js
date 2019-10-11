import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Todo from './todo';

const App = () => {
  return(
    <div>
      <h1>React Base 2019</h1>
      <Todo/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));

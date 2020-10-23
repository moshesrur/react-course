import React from 'react';
import ReactDOM from 'react-dom';
import Multiinput from './multiinput';

const App = () => {
  return (
    <div>
      <Multiinput />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);

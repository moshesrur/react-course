import React from 'react';
import ReactDOM from 'react-dom';
import Colorselection from './colorselection';

const App = () => {
  return (
    <div>
      <Colorselection />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);

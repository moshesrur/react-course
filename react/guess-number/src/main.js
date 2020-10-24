import React from 'react';
import ReactDOM from 'react-dom';
import GuessNumber from './guessnumber';

const App = () => {
  const random = Math.round(Math.random() * 1000);
  return (
    <div>
      <GuessNumber number={random}/>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);

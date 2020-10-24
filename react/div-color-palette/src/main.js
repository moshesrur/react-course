import React from 'react';
import ReactDOM from 'react-dom';
import ColorDiv from './colorDiv';

const App = () => {
  const red = 200;
  const green = 0;
  const blue = 0;

  const items = []

  for (let i = 0; i < 10; i++) {
    items.push(<ColorDiv red={red+i*10} green={green+i*10} blue={blue+i*10}/>)
  }

  return (
    <div>
      {items}
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);

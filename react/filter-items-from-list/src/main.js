import React from 'react';
import ReactDOM from 'react-dom';
import Filteredlist from "./filteredlist";

const App = () => {
  return (
        <Filteredlist />
  )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App/>, root);

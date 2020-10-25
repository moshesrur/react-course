import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ColorDiv from './colorDiv';

const App = () => {
  const [color, setColor] = useState(null);
  const items = []

  let tinycolor = require("tinycolor2");
  console.log("colorPicker", color);

  function getNextColor(source, offset) {
    return tinycolor(source).lighten(offset).toHexString();
  }

  let offset = 50;
  for (let i = 0; i < 10; i++) {
    let nextColor = getNextColor(color, offset);
    console.log("nextColor " + nextColor)
    items.push(<ColorDiv key={i} color={nextColor}/>)
    offset = offset - 10;
  }

  return (
      <div>
        <div><input type="color"
                    onChange={e => setColor(e.target.value)}></input></div>
        {items}
      </div>
  )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App/>, root);

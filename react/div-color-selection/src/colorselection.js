import React, {useState} from 'react';

export default function Colorselection(props) {
  const [color, setColor] = useState("");

  function handleChangeColor(e) {
    setColor(e.target.value);
  }

  return (
      <div style={{color: color}}>
        see the selected color
        <pre><input type="text" value={color}
                      onChange={handleChangeColor}
                      placeholder="write the color ..."/></pre>
      </div>
  )
}

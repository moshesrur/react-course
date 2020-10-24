import React from 'react';

export default function ColorDiv(props) {
  const {red, blue, green} = props;

  const color = 'rgb(' + [red, blue, green].join(',') + ')';
  console.log("color=" + color);
  return (
      <div style={{
        background: color,
        width: "50px",
        height: "50px",
        display: "inline-block"
      }}>
      </div>

  )
}

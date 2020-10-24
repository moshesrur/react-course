import React, {useState} from 'react';

export default function Multiinput(props) {
  const [delta, setDelta] = useState("");

  function handleChangeDelta(e) {
    // new input value = e.target.value
    setDelta(e.target.value);
  }

  const elements = [1, 2, 3, 4, 5];

  return (
      <div>
        {elements.map((value, index) => {
          return <pre><input id={index} type="text" value={delta}
                             onChange={handleChangeDelta}
                             placeholder="type something ..."/></pre>
        })}
      </div>
  )
}

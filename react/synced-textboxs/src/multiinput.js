import React, {useState} from 'react';

export default function Multiinput(props) {
  const [delta, setDelta] = useState("");

  function handleChangeDelta(e) {
    // new input value = e.target.value
    setDelta(e.target.value);
  }

  const items = []

  for (let i=0; i < 5; i++) {
    items.push(<pre><input type="text" value={delta}
                           onChange={handleChangeDelta}
                           placeholder="type something ..."/></pre>)
  }

  return (
      <div>
        {items}
      </div>
  )
}

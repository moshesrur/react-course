import React from 'react';

export default function Filter({filter, setFilter}) {

  function handleChangeFilter(e) {
    setFilter(e.target.value);
  }

  return (
      <div>
        <p>{filter}</p>
        <pre><input type="text" value={filter}
                    onChange={handleChangeFilter}
                    placeholder="filter ..."/></pre>
      </div>
  )
}

import React, {useState} from 'react';
import Filter from "./filter";
import ItemsList from "./itemslist";

export default function Filteredlist(props) {
  const [filter, setFilter] = useState("");

  return (
      <div>
        <Filter filter={filter} setFilter={setFilter}/>
        <ItemsList filter={filter}/>
      </div>
  )
}

import React from 'react';

export default function ItemsList(props) {
  const {filter} = props;
  const cars = ["alfa", "audi", "bmw", "cadillac", "dodge", "opel", "seat",
    "saab", "skoda", "fiat", "volvo", "volkswagen"];

  return (
      <div>
        <select id="cars" name="cars" size={10}>
          {cars.map((car, index) => {
            return car.includes(filter) && <option key={index} value={car}>{car}</option>
          })}
        </select>
      </div>
  )
}

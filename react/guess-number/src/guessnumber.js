import React, {useState} from 'react';

export default function Guessnumber(props) {
  const number = props.number;
  const [guessResult, setGuessResult] = useState("");

  function handleGuess(e) {
    if (e.target.value == number) {
      setGuessResult("Bingo");
      return;
    }
    setGuessResult(e.target.value > number ? "too big" : "too small");
  }

  return (
      <div>
        <p style={{color: "gray"}}> shhh.... the number is: {number} </p>
        <input type="number" onChange={handleGuess}/>
        <p> {guessResult} </p>
      </div>
  )
}

import React from "react";

function GuessBox({ submitGuess, disabled }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        submitGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guessBox">Enter guess:</label>
      <br />
      <input
        type="text"
        id="guessBox"
        pattern="[A-Za-z]{5}"
        value={guess}
        dsiabled={disabled.toString()}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      ></input>
    </form>
  );
}

export default GuessBox;

import React from "react";

function GameOver({ guesses, answer }) {
  const tail = [...guesses].pop();
  const wonGame = tail === answer;
  return (
    <>
      {wonGame && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{guesses.length}&nbsp;guesses</strong>.
          </p>
        </div>
      )}
      {!wonGame && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default GameOver;

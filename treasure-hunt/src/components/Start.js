import React from 'react';

function StartButton({ onStartGame }) {
  function handleClick() {
    onStartGame();
  }

  return (
    <button className="start-button" onClick={handleClick}>
      Start Game
    </button>
  );
}

export default StartButton;

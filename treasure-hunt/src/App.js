import React, { useState } from 'react';
import './App.css'; // Import your custom CSS file
import GameBoard from './components/GameBoard';
import StartButton from './components/Start';
import Treasure from './components/Treasure';
import Footer from './components/Footer';

function App() {
  const [gameStarted, setGameStarted] = useState(false); // State to track if the game has started

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="app">
      <h1>Treasure Hunt Game</h1>
      {!gameStarted ? (
        <StartButton onStartGame={handleStartGame} />
      ) : (
        <>
          <GameBoard />
          <Treasure />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

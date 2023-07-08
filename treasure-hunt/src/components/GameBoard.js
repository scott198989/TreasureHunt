import React, { useState } from 'react';
import Cell from './Cell';
import '../styles/GameBoard.css'
const GameBoard = () => {
    const initializeCells = () => {
        const initialCells = [];
      
        for (let row = 0; row < 3; row++) {
          for (let col = 0; col < 3; col++) {
            const cell = {
              id: `${row}-${col}`,
              hasTreasure: false,
              isDiscovered: false,
              row,
              col,
            };
      
            initialCells.push(cell);
          }
        }
      
        const randomIndex = Math.floor(Math.random() * initialCells.length);
        initialCells[randomIndex].hasTreasure = true;
      
        return initialCells;
      };

  const [cells, setCells] = useState(initializeCells());

  const handleCellClick = (id) => {
    const clickedCell = cells.find((cell) => cell.id === id);

    if (clickedCell.hasTreasure) {
      alert('Congratulations! You found the treasure!');
    } else {
      const updatedCells = cells.map((cell) =>
        cell.id === id ? { ...cell, isDiscovered: true } : cell
      );

      setCells(updatedCells);
    }
  };

  return (
    <div className="game-board">
      {cells.map((cell) => (
        <Cell
          key={cell.id}
          cellId={cell.id}
          hasTreasure={cell.hasTreasure}
          isDiscovered={cell.isDiscovered}
          onClick={handleCellClick}
        />
      ))}
    </div>
  );
};

export default GameBoard;

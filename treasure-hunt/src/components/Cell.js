import React from 'react';
import '../styles/Cell.css'
function Cell({ cellId, hasTreasure, isDiscovered, onClick }) {
  function handleClick() {
    if (!isDiscovered) {
      onClick(cellId);
    }
  }
  return (
    <div
      className={`cell ${isDiscovered ? 'discovered' : ''}`}
      onClick={handleClick}
    >
      {isDiscovered && hasTreasure ? (
        <span role="img" aria-label="treasure">
          🎉
        </span>
      ) : null}
    </div>
  );
}

export default Cell;

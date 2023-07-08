import React, { useState } from 'react';

const Treasure = () =>{
  const [isFound, setIsFound] = useState(false);
  function discoverTreasure() {
    setIsFound(true);
  }

  return (
    <div className={`treasure ${isFound ? 'found' : ''}`} onClick={discoverTreasure}>
      {isFound ? 'Treasure Found!' : 'Click to Discover'}
    </div>
  );
}

export default Treasure;

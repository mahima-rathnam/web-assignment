import React from 'react';
import './Block.css';

function Block({ block, onDrag }) {
  const handleClick = () => onDrag(block);

  return (
    <div className="block" onClick={handleClick}>
      <span>{block.type}</span>
    </div>
  );
}

export default Block;

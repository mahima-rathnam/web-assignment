import React from 'react';
import './ProgressBar.css';

function ProgressBar({ blocks }) {
  const totalDuration = blocks.reduce((sum, block) => sum + block.duration, 0);

  return (
    <div className="progress-bar">
      {blocks.map((block, index) => (
        <div
          key={index}
          className={`progress-segment ${block.type.toLowerCase()}`}
          style={{ flexGrow: block.duration }}
        >
          {block.type}
        </div>
      ))}
      <div className="progress-total">{totalDuration} hrs</div>
    </div>
  );
}

export default ProgressBar;

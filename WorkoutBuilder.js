import React, { useState } from 'react';
import './WorkoutBuilder.css';
import Block from './Block';
import ProgressBar from './ProgressBar';

const initialBlocks = [
  { id: 1, type: 'Warm Up', duration: 0.5 },
  { id: 2, type: 'Main Set', duration: 2.0 },
  { id: 3, type: 'Cool Down', duration: 0.5 },
];

function WorkoutBuilder() {
  const [workout, setWorkout] = useState([]);

  const handleDrag = (block) => {
    setWorkout((prevWorkout) => [...prevWorkout, block]);
  };

  return (
    <div className="workout-builder">
      <div className="block-selector">
        <h3>Click or drag the blocks to build workout</h3>
        <div className="block-list">
          {initialBlocks.map((block) => (
            <Block key={block.id} block={block} onDrag={handleDrag} />
          ))}
        </div>
      </div>

      <div className="workout-display">
        <ProgressBar blocks={workout} />
        <div className="workout-list">
          {workout.map((block, index) => (
            <div key={index} className="workout-block">
              {block.type} - {block.duration} hrs
            </div>
          ))}
        </div>
        <button className="save-workout">Save Workout</button>
      </div>
    </div>
  );
}

export default WorkoutBuilder;

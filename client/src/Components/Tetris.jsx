import React from 'react';
import { createStage } from '../gameHelpers';
import Stage from './Stage.jsx';
import Display from './Display.jsx';
import StartButton from './StartButton.jsx';

const Tetris = () => {
  return (
    <div>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StartButton />
      </aside>
    </div>
  );
};

export default Tetris;
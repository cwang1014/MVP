import React from 'react';
import { createStage } from '../gameHelpers';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris.jsx';
import Stage from './Stage.jsx';
import Display from './Display.jsx';
import StartButton from './StartButton.jsx';

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
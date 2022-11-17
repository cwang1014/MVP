import React from 'react';
import { StyledControls } from './styles/StyledControls.jsx';

const Controls = () => {
  return (
    <StyledControls>
      CONTROLS:
      <br />
      <br />
      Use arrow keys to move tetrominos left, right, and down
      <br />
      <br />
      Pressing space will reset the page so avoid that on winning runs
    </StyledControls>
  );
};

export default Controls;
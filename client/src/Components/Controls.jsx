import React from 'react';
import { StyledControls } from './styles/StyledControls.jsx';

const Controls = () => {
  return (
    <StyledControls>
      GAME CONTROLS:
      <br />
      <br />
      Use arrow keys to move tetrominos left, right, and down
      <br />
      <br />
      Up key rotates current piece
      <br />
      <br />
      Pressing space will reset the page
    </StyledControls>
  );
};

export default Controls;
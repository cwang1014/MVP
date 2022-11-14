import React from 'react';
import { StyledStage } from './styles/StyledStage.jsx';
import Cell from './Cell.jsx';

const Stage = ({ stage }) => {
  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </StyledStage>
  );
};

export default Stage;
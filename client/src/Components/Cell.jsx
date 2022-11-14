import React from 'react';
import { StyledCell } from './styles/StyledCell.jsx';
import { TETROMINOS } from '../tetrominos.jsx';

const Cell = ({ type }) => {
  return (
    <StyledCell type={type} color={TETROMINOS[type].color} />
  );
};

export default React.memo(Cell);
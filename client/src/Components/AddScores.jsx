import React, { useState } from 'react';

import { StyledForm, StyledInput, StyledLabel, StyledHSDiv, StyledH2 } from './styles/StyledAddScores.jsx';

const Highscores = ({ score, rows, level }) => {

  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div>
      {formSubmitted ? (
        <StyledForm>
          <StyledH2>Scores Submitted</StyledH2>
        </StyledForm>
      ) : (
        <StyledForm>
          <StyledH2>GAME OVER</StyledH2>
          <StyledHSDiv>
            <StyledLabel>Your score: {score}</StyledLabel>
          </StyledHSDiv>
          <StyledHSDiv>
            <StyledLabel>Your rows score: {rows}</StyledLabel>
          </StyledHSDiv>
          <StyledHSDiv>
            <StyledLabel>Your level score: {level}</StyledLabel>
          </StyledHSDiv>
          <StyledHSDiv>
            <StyledLabel>Input username below to save your scores or click start game to start a new game!</StyledLabel>
          </StyledHSDiv>
          <StyledHSDiv>
            <StyledInput placeholder="Username" /><StyledInput type="submit" value="Submit Scores" />
          </StyledHSDiv>
        </StyledForm>
      )}
    </div>
  );
};

export default Highscores;
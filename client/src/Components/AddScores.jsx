import React, { useState, useRef } from 'react';

import { StyledForm, StyledInput, StyledLabel, StyledHSDiv, StyledH2 } from './styles/StyledAddScores.jsx';

const AddScores = ({ score, rows, level }) => {

  const [formSubmitted, setFormSubmitted] = useState(false);
  const usernameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let leaderObj = {
      username: usernameRef.current.value,
      score: score,
      rowsscore: rows,
      levelscore: level,
    };
    console.log(leaderObj);
  };

  return (
    <div>
      {formSubmitted ? (
        <StyledForm>
          <StyledH2>Scores Submitted</StyledH2>
        </StyledForm>
      ) : (
        <StyledForm onSubmit={handleSubmit}>
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
            <StyledInput placeholder="Username" ref={usernameRef} required /><StyledInput type="submit" value="Submit Scores" />
          </StyledHSDiv>
        </StyledForm>
      )}
    </div>
  );
};

export default AddScores;
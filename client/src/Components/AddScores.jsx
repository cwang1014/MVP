import React, { useState, useRef } from 'react';
import axios from 'axios';

import { StyledForm, StyledInput, StyledLabel, StyledHSDiv, StyledH2 } from './styles/StyledAddScores.jsx';

const AddScores = ({ score, rows, level, leaderboards, setLeaderboards }) => {

  const usernameRef = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let leaderObj = {
      username: usernameRef.current.value,
      score: score,
      rowsscore: rows,
      levelscore: level,
    };
    axios.post('/highscores', leaderObj)
      .then(results => {
        axios.get('/highscores')
          .then(results => {
            setLeaderboards(results.data);
            setFormSubmitted(!formSubmitted);
            usernameRef.current.value = null;
          })
          .catch(err => console.log('GET after POST Error', err));

      })
      .catch(err => console.log('Error posting scores', err));
    // console.log(leaderObj);
  };

  return (
    <div>
      {formSubmitted ? (
        <StyledForm>
          <StyledHSDiv>
            <StyledH2>Scores Submitted</StyledH2>
          </StyledHSDiv>
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
            <StyledInput placeholder="Username" ref={usernameRef} required /><StyledInput type="submit" value="Submit Scores" id="input-submit" />
          </StyledHSDiv>
        </StyledForm>
      )}
    </div>
  );
};

export default AddScores;
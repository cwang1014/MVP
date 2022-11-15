import React from 'react';
import { StyledLeaderboards, StyledTHeader, StyledTBody, StyledTCell, StyledTRow } from './styles/StyledLeaderboards.jsx';

const Leaderboards = ({ leaderboards }) => {
  return (
    <StyledLeaderboards>
      <StyledTHeader>
        <StyledTRow>
          <th colSpan="4">Top 10</th>
        </StyledTRow>
      </StyledTHeader>
      <StyledTBody>
        <StyledTRow>
          <StyledTCell>Username</StyledTCell>
          <StyledTCell>Score</StyledTCell>
          <StyledTCell>Rows</StyledTCell>
          <StyledTCell>Lvl</StyledTCell>
        </StyledTRow>
        {leaderboards.map((leader, i) => (
          <StyledTRow key={i}>
            <StyledTCell>{leader.username}</StyledTCell>
            <StyledTCell>{leader.score}</StyledTCell>
            <StyledTCell>{leader.rowsscore}</StyledTCell>
            <StyledTCell>{leader.levelscore}</StyledTCell>
          </StyledTRow>
        ))}
      </StyledTBody>
    </StyledLeaderboards>
  );
};

export default Leaderboards;
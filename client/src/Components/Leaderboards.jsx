import React from 'react';
import { StyledLeaderboards, StyledTHeader, StyledTBody, StyledTCell } from './styles/StyledLeaderboards.jsx';

const Leaderboards = ({ leaderboards }) => {
  return (
    <StyledLeaderboards>
      <StyledTHeader>
        <tr>
          <th colSpan="4">Top 5</th>
        </tr>
      </StyledTHeader>
      <StyledTBody>
        <tr>
          <StyledTCell>User</StyledTCell>
          <StyledTCell>Score</StyledTCell>
          <StyledTCell>Rows</StyledTCell>
          <StyledTCell>Lvl</StyledTCell>
        </tr>
        {leaderboards.map((leader, i) => (
          <tr key={i}>
            <StyledTCell>{leader.username}</StyledTCell>
            <StyledTCell>{leader.score}</StyledTCell>
            <StyledTCell>{leader.rowsscore}</StyledTCell>
            <StyledTCell>{leader.levelscore}</StyledTCell>
          </tr>
        ))}
      </StyledTBody>
    </StyledLeaderboards>
  );
};

export default Leaderboards;
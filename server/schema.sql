CREATE DATABASE IF NOT EXISTS mvphighscores;
\c mvphighscores;

CREATE TABLE IF NOT EXISTS leaderboards (
  userid SERIAL PRIMARY KEY,
  username VARCHAR(40) NOT NULL,
  score BIGINT,
  rowsscore INT,
  levelscore INT
);
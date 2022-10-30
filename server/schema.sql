CREATE DATABASE IF NOT EXISTS mvphighscores;
USE mvphighscores;

CREATE TABLE IF NOT EXISTS leaderboards (
  userid INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(40) NOT NULL UNIQUE,
  score BIGINT NOT NULL,
  rowsscore INT NOT NULL,
  levelscore INT NOT NULL,
  PRIMARY KEY (userid)
);
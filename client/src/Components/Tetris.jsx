import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createStage, checkCollision } from '../gameHelpers.js';

// styled components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris.jsx';

// custom hooks
import { useInterval } from '../hooks/useInterval.js';
import { usePlayer } from '../hooks/usePlayer.js';
import { useStage } from '../hooks/useStage.js';
import { useGameStatus } from '../hooks/useGameStatus.js';

// components
import Stage from './Stage.jsx';
import Display from './Display.jsx';
import StartButton from './StartButton.jsx';
import AddScores from './AddScores.jsx';
import Leaderboards from './Leaderboards.jsx';

const Tetris = () => {

  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [leaderboards, setLeaderboards] = useState([]);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

  // console.log('player', player);
  useEffect(() => {
    axios.get('/highscores')
      .then(results => setLeaderboards(results.data))
      .catch(err => console.log('Error getting high scores', err));
  }, []);

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    // reset everything
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  };

  const drop = () => {
    // Increase level when player has cleared 2 rows
    if (rows > (level + 1) * 2) {
      setLevel(prev => prev + 1);
      // also increase speed
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // game over
      if (player.pos.y < 1) {
        console.log('GAME OVER!');
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1) + 200);
      }
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime)

  if (gameOver) {
    console.log(score, rows, level);
  }

  // console.log(createStage());

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
      <StyledTetris>
        {gameOver ? (
          <AddScores
            score={score}
            rows={rows}
            level={level}
            leaderboards={leaderboards}
            setLeaderboards={setLeaderboards}
          />
        ) : (
          <Stage stage={stage} />
        )}
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </div>
          )}
          <StartButton callback={startGame} />
          <div>
            <Leaderboards leaderboards={leaderboards} />
          </div>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
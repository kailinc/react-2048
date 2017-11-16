import React from 'react';
import './styles/index.css';
import RestartBtn from './RestartBtn'

const GameEnding = ({ board, onRestart }) => {
  let contents = '';
  if (board.win) {
    contents = 'Good Job!';
  } else if (board.lose) {
    contents = 'Game Over';
  }
  if (!contents) {
    return null;
  }
  return (
    <div className='gameEnding'>
      <p className='message'>{ contents }</p>
      <RestartBtn onClick={ onRestart }/>
    </div>
  );
};

export default GameEnding;

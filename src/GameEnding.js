import React, { Component } from 'react';
import './styles/index.css';

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
    <div className='overlay'>
      <p className='message'>{contents}</p>
      <button className="tryAgain" onClick={onRestart}>Another One</button>
    </div>
  );
};

export default GameEnding;

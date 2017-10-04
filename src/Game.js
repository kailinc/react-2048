import React, { Component } from 'react';
import Score from './Score';
import Board from './Board';

class Game extends Component {
  constructor() {
    super()
    this.state = {
      board: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
      curScore: 0,
      highScore: 1
    }
  }
  // method for handling arrow keys + all other keyboard actions
  handleKeyDown(event) {
    let key = event.keyCode
    let newBoard = []
    // handles up and down arrow
    if (key === 38 || key === 40) {
    //  newBoard = verBoard(this.state.board)
      // handles left and right arrow
    } else if (key === 37 || key === 39) {
     newBoard = horBoard(this.state.board)
     console.log(newBoard)
    }
  }

  // react way of adding event listner (keydown) to window
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  // react way of removing event listner (keydown) to window cuz react will render things that change
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }

  render() {
    return(
      <div className="game">
        <div className="game-info">
          <Score type="Current" score={this.state.curScore}/>
          <Score type="High" score={this.state.highScore}/>
        </div>
        <div className="game-board">
          <Board board={this.state.board}/>
        </div>
      </div>
    )
  }
}

// function to make simple array to array with horizontal orientation
const horBoard = function (board) {
  let newBoard = []
  for (let i = 0; i < board.length - 1; i+= 4) {
    newBoard.push([board[i],board[i+1], board[i+2], board[i+3]])
  }
  return newBoard
}
export default Game;

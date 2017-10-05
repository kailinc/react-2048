import React, { Component } from 'react';
import Score from './Score';
import Board from './Board';

class Game extends Component {
  constructor() {
    super()
    this.state = {
      board: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
      curScore: 0,
      highScore: 1,
      gameOver: false
    }
  }
  // method for handling arrow keys + all other keyboard actions
  handleKeyDown(event) {
    let key = event.keyCode
    let modBoard = structuredArray(this.state.board, key)
    // console.log('this is newBoard after change', newBoard(modBoard, key))
    // this.setState({
    //   board: processedBoard(newBoard)
    // })

    this.handleScore()
  }

  // handles the current score and high score of the game
  handleScore() {
    this.setState({
      curScore: updatedScore(this.state.board)
    })
    if (this.state.curScore >= this.state.highScore) {
      this.setState({
        highScore: this.state.curScore
      })
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

const structuredArray = function (board, key) {
  let newBoard = []
  let times = 0
  let increment = 0
  let consecutive = 0
  // makes vertical change
  if (key === 38 || key === 40) {
    times = 4
    increment = 1
    consecutive = 4
  // makes horizontal change
  } else if (key === 37 || key === 39) {
    times = 15
    increment = 4
    consecutive = 1
  }
  for (let i = 0; i < times; i+= increment) {
    newBoard.push([board[i], board[i + consecutive], board[i + (consecutive * 2)], board[i + (consecutive * 3)]])
  }
  return newBoard
}

// function
const newBoard = function (board, key) {
  // let modBoard = []
  // for (let i = 0; i < board.length; i ++) {
  //   if (board[i]) {
  //
  //   }
  // }
  // init empty array for the new boord
  // loops through the board
    // checks for different conditions
    // if all 4 is same
    // if middle 2 is the same
    // is right pair side is the same
    // if left pair is the same
  // checks for arrow
  // loop through array
  // will add 0 shift, push at the right ends of the array
}

// sums the value of the numbers on the board
const updatedScore = function (newBoard) {
  return newBoard.reduce((sum, value) => sum + value)
}

export default Game;

import React, { Component } from 'react';
import Score from './Score';
import Board from './Board';
import RestartBtn from './RestartBtn'
class Game extends Component {
  constructor() {
    super()
    this.state = {
      board: [
              1,2,0,0,
              0,0,0,1,
              4,0,0,0,
              0,0,1,2
            ],
      curScore: 0,
      highScore: 1,
      gameOver: false
    }
  }
  // method for handling arrow keys + all other keyboard actions
  handleKeyDown(event) {
    let key = event.keyCode
    let modBoard = structuredArray(this.state.board, key)
    this.setState({
      board: newBoard(modBoard, key)
    })
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

  restartGame() {
    this.setState({
      board: [],
      curScore: 0
    })
  }

  render() {
    return(
      <div className="game">
        <div className="game-info">
          <Score type="Current" score={this.state.curScore}/>
          <Score type="High" score={this.state.highScore}/>
          <RestartBtn handleRestart={() => this.restartGame()} />
        </div>
        <div className="game-board">
          <Board board={this.state.board}/>
        </div>
      </div>
    )
  }
}

// turns board array into array with horizontal orientation or vertical orientation
const structuredArray = function (board, key) {
  let newBoard = []
  let times = 0
  let inc = 0
  let next = 0
  // makes vertical change
  if (key === 38 || key === 40) {
    times = 4
    inc = 1
    next = 4
  // makes horizontal change
  } else if (key === 37 || key === 39) {
    times = 15
    inc = 4
    next = 1
  }
  for (let i = 0; i < times; i+= inc) {
    newBoard.push([board[i], board[i + next], board[i + (next * 2)], board[i + (next * 3)]])
  }
  return newBoard
}

// function to update board to a new one
const newBoard = function (board, key) {
  let nonZeroBoard = removeZero(board)
  let matchedBoard = findMatch(nonZeroBoard, key)
  console.log('this is matchedBoard', matchedBoard)

  // let modBoard = addZero(board, 'right')
  // var flatBoard = modBoard.reduce((a, b) => a.concat(b), []);
  // return flatBoard
}

// function to add zero the right places after handling matching pairs
const addZero = function (board, key) {
  // loop through board to check for
  // if arrow is down and right add zero at the end
  // if arrow is left and up add zero at the front
  for (let i = 0; i < board.length; i++) {
    while (board[i].length < 4) {
      if (key === 'right' || key === 'down') {
        board[i].unshift(0)
      } else {
        board[i].push(0)
      }
    }
  }
  return board
}

// removes all the zero in the board
const removeZero = function (board) {
  let newBoard = []
  for (let i = 0; i < board.length; i ++) {
    var row = board[i].filter(function (item) {
      return item !== 0
    })
    newBoard.push(row)
  }
  return newBoard
}

// sums the value of the numbers on the board
const updatedScore = function (newBoard) {
  return newBoard.reduce((sum, value) => sum + value)
}

const findMatch = function (board, key) {
  // if the sequence is empty or has 1 item skip it
  // if the sequence has 2 values check matching

  // if sequence has 3 values
    // check front 2 pairs then back to pairs ( left, up)
    // check back 2 pairs then front pairs ( right, down)

  // if sequence has 4 values
    // check front 2 pairs, (y) match it then check back 2 pairs
    // if not check middle pair (y) match it
    // (n) check last 2 pairs
}

export default Game;

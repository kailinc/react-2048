import React, { Component } from 'react';
import Score from './Score';
import Board from './Board';
import RestartBtn from './RestartBtn'
class Game extends Component {
  constructor() {
    super()
    this.state = {
      board: [
            //  4 combo
              2,2,2,2,
              2,2,2,1,
              1,2,2,2,
              2,2,1,1
              // 1,3,2,2,
              // 2,2,3,1,
              // 1,2,2,1
              // // 3 combo
              // 0,2,2,2,
              // 1,2,3,0,
              // 2,2,1,0,
              // 1,2,2,0,
              // // // 2 combo
              // 2,2,0,0,
              // 2,1,0,0,
              // // // 1 combo
              // 2,0,0,0
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
      board: updateBoard(modBoard, key)
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
      board: newBoard(),
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
  // horizontal settings
  let times = 15
  let inc = 4
  let next = 1
  // makes vertical settings for change
  if (key === 38 || key === 40) {
    times = 4
    inc = 1
    next = 4
  }
  for (let i = 0; i < times; i+= inc) {
    newBoard.push([board[i], board[i + next], board[i + (next * 2)], board[i + (next * 3)]])
  }
  return newBoard
}

// function to update board by matching pairs and converting it to the right format
const updateBoard = function (board, key) {
  let arrows = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  }
  let arrowKey = arrows[key]
  let boardWithoutZero = removeZero(board)
  let matchedBoard = findMatch(boardWithoutZero, arrowKey)
  let boardWithZero = addZero(matchedBoard, arrowKey)

  if (arrowKey === 'up' || arrowKey === 'down') {
    boardWithZero = verFormatBoard(boardWithZero)
  }

  var flatBoard = boardWithZero.reduce((a, b) => a.concat(b), []);
  return flatBoard
}

// function to add zero the right places after handling matching pairs until there are 4 items in a sub array
const addZero = function (board, key) {
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

// function to find matching pairs and sum it into one
// HAZARD: UGLY, LONG, UN DRY CODE UNDER CONSTRUCTION
const findMatch = function (board, key) {
  let p1 = 0
  let p2 = 1
  let p3 = 2
  let p4 = 3

  if (key === 'right' || key === 'down') {
    p1 = 3
    p2 = 2
    p3 = 1
    p4 = 0
  }
  for (let i = 0; i < board.length; i++) {
    if (board[i][p1] === board[i][p2] && board[i][p2]) {
      board[i][p1] = board[i][p1] * 2
      if (board[i][p3] === board[i][p4] && board[i][p4]) {
        board[i][p3] = board[i][p3] * 2
        board[i].splice(p2,1)
        board[i].splice(p4,1)
      } else {
        board[i].splice(p2,1)
      }
    } else if (board[i][p2] === board[i][p3] && board[i][p3]) {
      board[i][p2] = board[i][p2] * 2
      board[i].splice(p3,1)
    } else if (board[i][p3] === board[i][p4] && board[i][p4]) {
      board[i][p3] = board[i][p3] * 2
      board[i].splice(p4,1)
    }
  }
  return board
}

const verFormatBoard = function (board) {
  let verBoard = [[],[],[],[]]
  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board[i].length; k++ ) {
      let item = board[i][k]
      verBoard[k].push(item)
    }
  }
  return verBoard
}

// returns a new board with 2 items in it
const newBoard = function () {
  // there can only be 2 items in it.
  // the rest are 0
  // the items can be a 2 or a 4
  // 2 is more common
}

export default Game;

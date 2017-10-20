import React, { Component } from 'react';
import Score from './Score';
import Board from './Board';
import RestartBtn from './RestartBtn'

class Game extends Component {
  constructor() {
    super()
    this.state = {
      board: [
              0,0,2,2,4,2,2,4,0,2,2,2,2,2,16,2
              // 4,8,4,2,8,4,32,4,4,16,4,64,2,32,8,4
            ],
      curScore: 0,
      highScore: 1,
      win: false,
      gameOver: false
    }

  }
  // method for handling arrow keys + all other keyboard actions
  handleKeyDown(event) {
    let key = event.keyCode
    // let modBoard = structuredArray(this.state.board, key)
    // if (haveNextMove(this.state.board)) {
    this.setState({
      board: updateBoard(this.state.board, key)
    })
    this.checkWin()
    this.handleScore()
    // } else {
    //   this.setState({
    //     gameOver: true
    //   })
    // }
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
    // console.log('this is newBoard ', newBoard())
    // return ''
    this.setState({
      board: newBoard(),
      curScore: 0
    })
  }

  checkWin() {
    for (let i = 0; i < this.state.board.length; i++) {
      if (this.state.board[i] === 2048) {
        this.setState({
          win: true,
          gameOver: true
        })
      }
    }
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
  let modBoard = structuredArray(board, key)
  let boardWithoutZero = removeZero(modBoard)
  let matchedBoard = findMatch(boardWithoutZero, arrowKey)
  let boardWithZero = addZero(matchedBoard, arrowKey)

  if (arrowKey === 'up' || arrowKey === 'down') {
    boardWithZero = verFormatBoard(boardWithZero)
  }

  var flatBoard = boardWithZero.reduce((a, b) => a.concat(b), []);
  let boardWithNewNum = addNewNum(flatBoard)
  return boardWithNewNum
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

// returns a new board with 2 items (2 or 4) at random places
const newBoard = function () {
  let board = new Array(16).fill(0)
  let ranIndex1 = Math.floor(Math.random() * 16)
  let ranIndex2 = Math.floor(Math.random() * 16)
  // if the two indx are the same assign randIndex2 a new random number until they don't have the same one
  while (ranIndex1 === ranIndex2) {
    ranIndex2 = Math.floor(Math.random() * 16)
  }
  board[ranIndex1] = twoOrFour()
  board[ranIndex2] = twoOrFour()
  return board
}

// returns 2 or 4 with more weight in 2
const twoOrFour = function () {
  let num
  Math.random() >= 0.05 ? num = 2 : num = 4
  return num
}

const addNewNum = function (board) {
  let space = []
  for (let i = 0; i < board.length; i++) {
    if (board[i] === 0) {
      space.push(i)
    }
  }
  let ranIndex = Math.floor(Math.random() * space.length)
  board[space[ranIndex]] = twoOrFour()
  return board
}

// const haveNextMove = function (board) {
//   let arrows = [37,38,39,40]
//   let curBoard = board
//   let counter = 0
//   while (counter < 4) {
//     let nextBoard = updateBoard(board, arrows[counter])
//     if (nextBoard !== curBoard) {
//       return true
//     }
//     counter += 1
//   }
//   return false
// }

export default Game;

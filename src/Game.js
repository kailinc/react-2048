import React, { Component } from 'react';
import Score from './Score';
import Board from './Board';
import RestartBtn from './RestartBtn'
class Game extends Component {
  constructor() {
    super()
    this.state = {
      board: [
              // 4,4,4,4,
              // 4,4,2,2,
              // 1,4,4,1,
              // 1,2,3,4
              1,2,4,4,
              4,4,2,1,
              4,4,4,2,
              4,2,2,2
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
    // this.setState({
    //   board: newBoard(modBoard, key)
    // })
    console.log('handleKeyDown() this is newBoard() ', newBoard(modBoard, key))
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
  // need function to reorder checking conditions based on arrow key

  let winningCombo = [
    [0,1],
    [2,3],
    [1,2]
  ]

  // NEW APPROACH
  // 1 loop through board that checks the matching combos
  // if match, will push the sum of the pair into sequence
  // need to handle items that don't have matching pairs
  // sequence will be pushed to modBoard
  // need to add values that dont have adj matching pair to sequence
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] === board[i][1]) {
      board[i][0] = board[i][0] * 2
      board[i].splice(1,1)
    } else if (board[i][1] === board[i][2]) {
      board[i][1] = board[i][1] * 2
      board[i].splice(2,1)
    } else if (board[i][2] === board[i][3]) {
      board[i][2] = board[i][2] * 2
      board[i].splice(3,1)
    }
    let seqLen = board[i].length
    if (board[i][seqLen-1] === board[i][seqLen-2]) {
      board[i][seqLen - 2] = board[i][seqLen - 2] * 2
      board[i].splice(seqLen - 1,1)
    }
  }
  console.log('this is modBoard ', board)
  // function to add in 0 or null depending on arrow key
  // might be unnessary because react is so chill about data structures
}

// sums the value of the numbers on the board
const updatedScore = function (newBoard) {
  return newBoard.reduce((sum, value) => sum + value)
}

export default Game;

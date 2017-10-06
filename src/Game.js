import React, { Component } from 'react';
import Score from './Score';
import Board from './Board';
import RestartBtn from './RestartBtn'
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
    console.log('this is modBoard from handleKeyDown() ', modBoard)
    // this.setState({
    //   board: processedBoard(modBoard)
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
  let modBoard = []
  let winningCombo = [
    [0,1],
    [2,3],
    [1,2]
  ]
  // loops through the board(complex array)
  // check value of values depending on array key
  // if <= checks [0,1] then [2,3]
  // if => checks [2,3] then [0,1]
  // check [1,2] last
  // if the values are equal modBoad.push([values, values])
  // function to add in 0 or null depending on arrow key
  // might be unnessary because react is so chill about data structures
}

// sums the value of the numbers on the board
const updatedScore = function (newBoard) {
  return newBoard.reduce((sum, value) => sum + value)
}

export default Game;

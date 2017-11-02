import React, { Component } from 'react';
import Square from './Square';
import './styles/index.css';

class Board extends Component {
  createBoard() {
    let board = new Array(16).fill(' ')
    return board.map((cur) => <Square value={ cur }/>)
  }

  render() {
    let board = this.createBoard()
    return(
      <div className="board">
       { board }
       <span className="tile col3 row0 tile2 overlay">2</span>
      </div>
    )
  }
}

export default Board;

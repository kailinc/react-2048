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
    let blocks = this.props.blocks
    // console.log('blocks is from Board C ', blocks)
    return(
      <div className="board">
       { board }
      </div>
    )
  }
}

export default Board;

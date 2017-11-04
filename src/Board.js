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
    let blocks = Object.keys(this.props.blocks).map((block) => <Square id={block} block={this.props.blocks[block]} type='block' />)
    return(
      <div className="board">
       { board }
       { blocks }
      </div>
    )
  }
}

export default Board;

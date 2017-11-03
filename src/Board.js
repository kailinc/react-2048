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
    // console.log('this is blocks from Board ', this.props.blocks)
    let blocks = this.props.blocks.map((block) =>  {
      return (<Square
          block={block}
          type='block'
      />)
    })

    return(
      <div className="board">
       { board }
       { blocks }
      </div>
    )
  }
}

export default Board;

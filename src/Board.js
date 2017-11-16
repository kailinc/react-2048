import React, { Component } from 'react';
import Square from './Square';
import EmptySquare from './EmptySquare';
import './styles/index.css';
import SlackEmojis from './SlackEmojis';
import GameEnding from './GameEnding';

class Board extends Component {
  createBoard() {
    let board = new Array(16).fill(' ')
    return board.map((cur, index) => <EmptySquare key={index} value={ cur }/>)
  }

  render() {
    let board = this.createBoard()
    let blocks = Object.keys(this.props.blocks).map((block) => <Square id={block} block={this.props.blocks[block]} type='block' />)
    return(
      <div className="board">
        <GameEnding board={ this.props.board } onRestart={ () => this.props.onRestart() }/>
        <SlackEmojis numParrots={this.props.numParrots}/>
        { board }
        { blocks }
      </div>
    )
  }
}

export default Board;

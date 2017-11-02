import React, { Component } from 'react';
import Square from './Square';
import './styles/index.css';

class Board extends Component {
  createRows() {
    return(
      <div>
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    )
  }

  render() {
    return(
      <div className="board">
        {this.createRows()}
        {this.createRows()}
        {this.createRows()}
        {this.createRows()}
      </div>
    )
  }
}

export default Board;

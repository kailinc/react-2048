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
        <span className="pos4 tile">hi</span>
        {this.createRows()}
        {this.createRows()}
        {this.createRows()}
        {this.createRows()}
      </div>
    )
  }
}

export default Board;

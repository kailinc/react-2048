import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  renderSquare(i) {
    return( <Square value={ this.props.board[i] }/> )
  }

  render() {
    return(
      <div>
        <p>This is Board</p>
        <div>
          {this.renderSquare(0)}
        </div>
      </div>
    )
  }
}

export default Board;

import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  render() {
    return(
      <div>
        <p>This is Board</p>
        <div>
          <Square />
        </div>
      </div>
    )
  }
}

export default Board;

import React, { Component } from 'react';
import './styles/index.css';

class Square extends Component {
  render() {
    if (this.props.type === 'block') {
      let attributes = ['overlay', 'tile']
      let id = this.props.block.id
      let col = 'col' + this.props.block.curCol
      let row = 'row' + this.props.block.curRow
      let tile = 'tile' + this.props.block.value
      attributes.push(id, col, row, tile)
      attributes = attributes.join(' ')
      console.log('this is attributes ', attributes)
      return(
        <span
          id={id}
          className={attributes}>
            {this.props.block.value}
        </span>)
    }
    return(<span className="cell"> {this.props.value}</span>)
    }
}

export default Square;

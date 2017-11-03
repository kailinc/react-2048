import React, { Component } from 'react';
import './styles/index.css';

class Square extends Component {
  render() {
    if (this.props.type === 'block') {
      let attributes = [
        'overlay',
        'tile',
        'col' + this.props.block.curCol,
        'row' + this.props.block.curRow,
        'tile' + this.props.block.value
      ]
      if (this.props.block.new) {
        attributes.push('new')
      }

      attributes = attributes.join(' ')
      return(
        <span id={this.props.block.id} className={attributes}>
            {this.props.block.value}
        </span>)
    }
    return(<span className="cell"> {this.props.value}</span>)
    }
}

export default Square;

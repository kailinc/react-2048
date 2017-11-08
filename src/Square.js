import React, { Component } from 'react';
import './styles/index.css';

class Square extends Component {

  shouldComponentUpdate(nextProps) {
    if (this.props.block !== nextProps.block) {
      return true
    }
    if (!nextProps.block.moved() && !nextProps.block.new) {
      return false
    }
    return true
  }

  render() {
    let block = this.props.block
    let type = this.props.type
    if (type === 'block') {
      let attributes = [
        'overlay',
        'tile',
        'col' + this.props.block.curCol,
        'row' + this.props.block.curRow,
        'tile' + this.props.block.value
      ]
      if (block.new) {
        attributes.push('new')
      }
      if (block.moved()) {
        let animation = block.fromRow() === block.toRow() ? 'hor' + (block.fromCol() - block.toCol()) : 'ver' + (block.fromRow() - block.toRow())
        attributes.push(animation)
      }

      attributes = attributes.join(' ')
      return(
        <span id={this.props.block.id} className={attributes}>
            {this.props.block.value}
        </span>)
    }
    return(<span className="cell"></span>)
    }
}

export default Square;

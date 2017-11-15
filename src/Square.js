import React, { Component } from 'react';
import './styles/index.css';

class Square extends Component {

  shouldComponentUpdate(nextProps) {
    if (this.props.block !== nextProps.block) {
      return true
    }
    return true
  }

  render() {
    let block = this.props.block
    let attributes = [ 'overlay', 'tile', 'tile' + block.value ]
    if (block.new) {
      attributes.push('new', 'col' + block.curCol, 'row' + block.curRow)
    } else {
      attributes.push('col' + block.fromCol(), 'row' + block.fromRow())
    }
    if (block.moved()) {
      let animation = block.fromRow() === block.toRow() ? 'hor' + (block.fromCol() - block.toCol()) : 'ver' + (block.fromRow() - block.toRow())
      attributes.push(animation)
    }
    if (block.combined) {
      attributes.push('toBeDeleted')
    }
    if (block.alpha) {
      attributes.push('alpha upgraded')
    }

    if (block.upgraded) {
      attributes.push('upgraded')
    }

    attributes = attributes.join(' ')
    return(
      <span id={block.id} className={attributes}>
          {block.value}
      </span>)
    }
}

export default Square;

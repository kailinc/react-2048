import React, { Component } from 'react';
import './styles/index.css';

class Square extends Component {

  // shouldComponentUpdate(nextProps) {
  //   if (this.props.block !== nextProps.block) {
  //     return true
  //   }
  //
  //   return false
  // }
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
        console.log('it moved')
        let animation = block.fromRow() === block.toRow() ? 'hor' + (block.fromCol() - block.toCol()) : 'ver' + (block.fromRow() - block.toRow())
        attributes.push(animation)
      }

      // if (this.props.block.combined) {
      //   let [ nextRow, nextCol ] = [ this.props.block.combined.curRow, this.props.block.combined.curCol ]
      //   let [ curRow, curCol ] = [ this.props.block.curRow, this.props.block.curCol ]
      //   let animation = nextRow === curRow ? 'hor' + (curCol - nextCol) : 'ver' + (curRow - nextRow)
      //   attributes.push(animation, 'toBeDeleted')
      // }


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

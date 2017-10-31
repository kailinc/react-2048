import React, { Component } from 'react';
import './App.css';
import './index.css';

class Square extends Component {
  render() {
    let value = this.props.value
    if (this.props.value === 0) {
      return(<span className="cell"> </span>)
    }
    let tile = 'tile' + this.props.value
    let classes = ['tile', tile]
    classes = classes.join(' ')
    return(
      <span className={classes}>{this.props.value}</span>
    )
  }
}

export default Square;

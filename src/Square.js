import React, { Component } from 'react';
import './App.css';

class Square extends Component {
  render() {
    let value = this.props.value
    if (this.props.value === 0) {
      value = ''
    }
    return( <p className="square"> {value} </p> )
  }
}

export default Square;

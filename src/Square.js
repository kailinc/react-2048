import React, { Component } from 'react';
import './App.css';

class Square extends Component {
  render() {
    return( <p className="square"> { this.props.value } </p> )
  }
}

export default Square;

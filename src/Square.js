import React, { Component } from 'react';
import './styles/index.css';

class Square extends Component {
  render() {
      return(<span className="cell"> {this.props.value}</span>)
    }
}

export default Square;

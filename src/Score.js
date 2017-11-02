import React, { Component } from 'react'
import './styles/index.css';

class Score extends Component {
  render() {
    return(
      <div>
        <p>{this.props.type} Score: {this.props.score}</p>
      </div>
    )
  }
}

export default Score;

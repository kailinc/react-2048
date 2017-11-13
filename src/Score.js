import React, { Component } from 'react'
import './styles/index.css';

class Score extends Component {
  render() {
    console.log('Score: this is scoreToAdd ', this.props.scoreToAdd)
    return(
      <div className={this.props.type + '-container'}>
      {this.props.score}
      </div>
    )
  }
}

export default Score;

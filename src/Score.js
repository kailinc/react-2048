import React, { Component } from 'react'
import './styles/index.css';

class Score extends Component {

  shouldComponentUpdate(nextProps) {
    if (this.props.score !== nextProps.score) {
      return true
    }
    return true
  }

  render() {
    let newScores
    if (this.props.scoresToAdd) {
      newScores = this.props.scoresToAdd.map((score) => <p>{score}</p> )
    } else {
      newScores = ''
    }
    return(
      <div className={this.props.type + '-container'}>
      {this.props.score}
      { newScores }
      </div>
    )
  }
}

export default Score;

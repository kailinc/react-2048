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
    let newScores = this.props.scoresToAdd ? <p className={"addScore"}>+{ this.props.scoresToAdd }</p> : null
    return(
      <div className={this.props.type + '-container score'}>
      {this.props.score}
      { newScores }
      </div>
    )
  }
}

export default Score;

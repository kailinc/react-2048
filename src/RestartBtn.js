import React, { Component } from 'react';
import './styles/index.css';

class RestartBtn extends Component {
  render() {
    return(
      <button className="tryAgain" onClick={() => this.props.onClick()}>Another One</button>
    )
  }
}

export default RestartBtn

import React, { Component } from 'react'
import './styles/index.css';

class Parrots extends Component {
  constructor(props) {
    this.state = {
      count: 0
    }
  }
  addParrot() {

  }

  render() {
    if (this.props.addNewParrot) {
      parrots.push('newparrot')
    }

    return(
      <div>
        <img className={'parrotMarch parrot'} src={require("./img/fast_parrot.gif")} alt='tree'/>
      </div>

    )
  }
}

export default Parrots;

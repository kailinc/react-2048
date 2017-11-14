import React, { Component } from 'react'
import './styles/index.css';

class Parrots extends Component {
  render() {
    return(
      <img className={'parrotMarch parrot'} src={require("./img/fast_parrot.gif")} alt='tree'/>
    )
  }
}

export default Parrots;

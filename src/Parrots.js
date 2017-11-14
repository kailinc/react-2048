import React, { Component } from 'react'
import './styles/index.css';

class Parrots extends Component {
  render() {
    return(
      <div>
        <img className={'parrotMarch parrot'} src={require("./img/fast_parrot.gif")} alt='tree'/>
      </div>

    )
  }
}

export default Parrots;

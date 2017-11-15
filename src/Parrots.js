import React, { Component } from 'react'
import './styles/index.css';

class Parrots extends Component {
  render() {
    let parrotArray = new Array(this.props.numParrots).fill(' ')
    let parrots = parrotArray.map((parrot, index) => <img className={'parrot parrotMarch'} src={require(`./img/slackEmoji${index}.gif`)} alt='parrot'/>)

    return(
      <div id="parrots">
        { parrots }
      </div>

    )
  }
}

export default Parrots;

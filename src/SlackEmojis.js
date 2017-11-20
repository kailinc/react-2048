import React, { Component } from 'react'
import './styles/index.css';

class SlackEmojis extends Component {
  render() {
    let emojiArray = new Array(this.props.numSlackEmojis).fill(' ')
    let emojis = emojiArray.map((emoji, index) => <img className={'emoji emojiMarch'} src={require(`./img/slackEmoji${index}.gif`)} alt='emoji'/>)
    return(
      <div id="parrots">
        { emojis }
      </div>

    )
  }
}

export default SlackEmojis;

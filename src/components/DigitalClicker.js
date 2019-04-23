// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
  constructor() {
    super();
    this.state = { timesClicked: 0 }
  }


  incrementClicks = (e) => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    const { timesClicked } = this.state
    return (
      <button onClick={this.incrementClicks}>
        {timesClicked}
      </button>
    )
  }
}

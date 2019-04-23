// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  setBitRate = (e) => {
    const settings = { ...this.state.settings }
    settings.bitrate = 12
    this.setState({ settings })
  }

  setResolution = (e) => {
    const settings = { ...this.state.settings }
    settings.video.resolution = '720p'
    this.setState({ settings })
  }

  render() {
    return (
      <div>
        <button
          onClick={this.setBitRate}
          className="bitrate">BitRate</button>
        <button
          onClick={this.setResolution}
          className="resolution">Resolution</button>
      </div>
    )
  }
}

import React from 'react'
import classNames from 'classnames'
import {Mic, MicOff, X, Video, VideoOff, Monitor, Maximize, Minimize, Send} from 'react-feather';

export default class Controls extends React.Component {

  constructor(props) {

    super(props)

  }

  componentDidMount() {
  }

  render() {

    const {
      audioOn, videoOn, screenOn, audioEnabled, videoEnabled, screenEnabled,
      handleHangUp,handleVideoToggle, handleAudioToggle, handleMaximizeToggle, inFullscreen
    } = this.props

    const videoClassNames = classNames('button-primary control', {
      on: videoOn
    })
    const audioClassNames = classNames('button-primary control', {
      on: audioOn
    })
    const screenClassNames = classNames('button-primary control', {
      on: true
    })
    
    const controlsClassNames = classNames()

    /* <button className={maximizeClassNames} onClick={handleMaximizeToggle}>
            { inFullscreen ? <Maximize /> : <Minimize /> }
          </button>
          const maximizeClassNames = classNames('button-primary control', {
      on: true
    })

    
    */
    return (
      <div id='controls' className={controlsClassNames}>
        <div className="row">
        <div className="column">
          <button className={screenClassNames}> 
            <Monitor />
          </button>
          </div>
          <div className="column">
          <button className={videoClassNames} onClick={handleVideoToggle} disabled={!videoEnabled}>
            { videoOn && videoEnabled ? <Video /> : <VideoOff /> }
          </button>
          </div>
          <div className="column">
          <button className={audioClassNames} onClick={handleAudioToggle} disabled={!audioEnabled}>
            { audioOn && audioEnabled ? <Mic /> : <MicOff /> }
          </button>
          </div>
        </div>
          <div className="row">
          <button id='hang-up' className='button-primary' onClick={handleHangUp}>
            Leave Call
          </button>
          </div>
        
      </div>
    )

  }

}
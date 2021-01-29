import React from 'react'
import classNames from 'classnames'
import MyVideo from './my-video'

export default function(props) {

  const {
    stream, videoOn,videoEnabled,expanded,
  } = props

  const myStreamClassNames = classNames({expanded})

  return (
    <div id='my-stream' className={myStreamClassNames}>
      <MyVideo stream={stream} videoOn={videoOn} videoEnabled={videoEnabled} />
    </div>
  )

}

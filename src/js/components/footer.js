import React from 'react'
import {Shield, Users, Lock} from 'react-feather'

export default (props) => {

  return (
    <div id='footer'>
      <div className='container'>
        <div className='row'>
          <h5>About</h5>
          <p>This website is forked off p2p.chat, a free and open source project. <a href="https://github.com/tom-james-watson/p2p.chat">https://github.com/tom-james-watson/p2p.chat</a>. Source by <a href="https://tomjwatson.com">tomjwatson.com</a>.</p>
        </div>
        <div className='row'>
          <p> Fork by Myles Brophy <a href="https://github.com/mybropro/p2p.chat">https://github.com/mybropro/p2p.chat</a>.</p>
          <p>For any help or feedback, please contact <a href='mailto:myles@savethereef.net'>myles@savethereef.net</a>.</p>
        </div>
      </div>
    </div>
  )

}

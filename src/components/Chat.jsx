import React from 'react'
import Cam from '../images/cam.png'
import Add from '../images/add.png'
import More from '../images/more.png'
const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatinfo">
        <span>Sabaa</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Chat

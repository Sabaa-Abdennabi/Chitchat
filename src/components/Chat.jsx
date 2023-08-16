import React from 'react'
import Cam from '../images/cam.png'
import Add from '../images/add.png'
import More from '../images/more.png'
import Messages from './Messages'
import Input from './Input'
import { useState } from 'react'

const Chat = () => {
 
  return (
    <div className='chat'>
      <div className="chatinfo">
      <span id="toggle-sidebarf" >Sabaa</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat

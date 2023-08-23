import React from 'react'
import Cam from '../images/cam.png'
import Add from '../images/add.png'
import More from '../images/more.png'
import Messages from './Messages'
import Input from './Input'
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'

const Chat = () => {

  const {data}= useContext(ChatContext);


  return (
    <div className='chat'>
      <div className="chatinfo">
        <span id="toggle-sidebarf" >{data.user.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat

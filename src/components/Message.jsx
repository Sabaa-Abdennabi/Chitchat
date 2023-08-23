import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  console.log(message);

  
  return (

    <div className={message.senderId==currentUser.uid ?"message owner":"message"}>
      <img
        src={message.senderId==currentUser.uid ? currentUser.photoURL : data.user.photoURL}
          alt="" />
      <div className="messageinfo">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt=""/>}  
      </div>
    </div>

  )
}

export default Message

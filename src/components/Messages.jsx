import React, { useContext ,useState,useEffect} from 'react'
import Message from './Message'
import { db } from '../firebase';
import { doc } from 'firebase/firestore';
import { ChatContext } from '../context/ChatContext'
import { onSnapshot } from 'firebase/firestore';
const Messages = () => {

  const [messages,setMessages]=useState([]);
  const {data}= useContext(ChatContext);

  useEffect(() => {
    const unsub=onSnapshot(doc(db,"chats",data.chatId),
    (doc)=>{
      doc.exists() && setMessages(doc.data().messages);
    })
    return (()=>{
      unsub();

    })
  },[data.chatId])

  return (
    <div className='messages'>
      {messages?.map((m) => (
        <Message key={m.id} message={m} />
      ))}

    </div>
  )
}

export default Messages

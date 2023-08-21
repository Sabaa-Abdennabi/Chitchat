import React, { useEffect, useState, useContext } from 'react'
import { collection, onSnapshot, query, where, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from "../context/AuthContext";
const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getchats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();

      }
    }
    currentUser.uid && getchats();
  }, [currentUser.uid]);


  return (
    <div className='chats'>
      {Object.entries(chats)?.map((chat) => (
        <div className="userChat" key={chat[0]}>
          <img src={chat[1].photoURL} alt="" />
          <div className="userChatinfo">
            <span>{chat[1].displayName}</span>
            <p>{chat[1].lastMessage}</p>
          </div>
        </div>
        ))}
    </div>
  )
}

export default Chats

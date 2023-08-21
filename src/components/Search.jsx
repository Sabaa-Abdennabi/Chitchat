import { useState } from 'react'
import { collection, query, where, setDoc,getDoc, getDocs,updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { doc } from 'firebase/firestore';
const Search = () => {

  //consts
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const { currentUser } = useContext(AuthContext);

  //functions
  const handleKey = (e) => {
    e.code == "Enter" && handleSearch();

  }
  const handleSelect = async () => {
    //check if there is a chat
    const combinetid = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinetid));

      if (!res.exists()) {

        //create chat

        await setDoc(doc(db, "chats", combinetid), { messages: [] });

        //create userChat

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinetid + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinetid + ".date"]: serverTimestamp(),
        })
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinetid + ".userinfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinetid + ".date"]: serverTimestamp(),
        })
      }
    } catch (err) {
      setErr(true);
      console.log(err);
    }
    // create userchat

  }

  const handleSearch = async () => {

    const q = query(collection(db, "users"), where("displayName", "==", username));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        console.log(doc.id, " => ", doc.data());
      });
    } catch (err) {
      setErr(true);
      console.log(err);
    }

  }





  return (
    <div className='search'>
      <div className="searchForm">
        < input type='text' placeholder='Search' onKeyDown={handleKey} onChange={e => setUsername(e.target.value)} />
      </div>
      {err && <span className='err'>User not found</span>}
      {user && <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt="" />
        <div className="userChatinfo">
          <span>{user.displayName}</span>
        </div>
      </div>}

    </div>
  )
}

export default Search

import {useState} from 'react'
import { collection,query,where,getDocs } from 'firebase/firestore';
import {db} from '../firebase';
import { AuthContext } from "../context/AuthContext";
const Search = () => {
  const [username, setUsername] = useState('');
  const[user, setUser]=useState(null);
  const [err, setErr] = useState(false);
  const {currentUser}=useContext(AuthContext);
const handleKey=(e)=>{
 e.code=="Enter"&& handleSearch();

}
const handleSelect=async ()=>{
  //check if there is a chat
  const combinetid=currentUser.uid> user.uid? currentUser.uid+user.uid:user.uid+currentUser.uid;
  try {
  const res= await getDocs(db,"chats",combinetid);
if(!res.exists()){
  //create chat
  await setDoc(doc,(db,"chats",combinetid),{messages:[]});
  //create userChat
  userChats: {
    JanesId:{
      combinetid:{
        userInfo:{
          DelayNode
          ,img
          ,id
        },
        lastMessage:"",
        date:""
      }
    }
  }



}
  }catch(err){
    setErr(true);
    console.log(err);
  }
  // create userchat

}
const handleSearch=async ()=> {
  const q = query(collection(db, "users"), where("displayName", "==", username));
  try{
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    setUser(doc.data());
    console.log(doc.id, " => ", doc.data());
  });}catch(err){
    setErr(true); 
    console.log(err);
  }

}





  return (
    <div className='search'>
      <div className="searchForm">
              <input type='text' placeholder='Search' onKeyDown={handleKey}onChange={e=>setUsername(e.target.value)} />
      </div>
      {err&&<span className='err'>User not found</span>}
      {user&&<div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt="" />
        <div className="userChatinfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
      
    </div>
  )
}

export default Search

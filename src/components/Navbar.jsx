import React, { useContext } from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'


const Navbar = () => {
  const { currentUser } = useContext(AuthContext)
  return (
    <div className='navbar'>
      <span className="logo">
        ChitChat
      </span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span >{currentUser.displayName}</span>
        <button onClick={()=>{signOut(auth)}} >Log Out</button>
      </div>
    </div>
  )
}

export default Navbar

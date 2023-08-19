import React from 'react'
import { auth } from '../firebase'
import {signOut} from 'firebase/auth'
const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">
        ChitChat
      </span>
      <div className="user">
        <img src="https://i.pinimg.com/474x/1f/83/c5/1f83c5ce9090c12d1969ad7a3745cc82.jpg" alt="" />        <span >Username</span>
        <button onClick={()=>signOut(auth)}>Log Out</button>
      </div>
    </div>
  )
}

export default Navbar

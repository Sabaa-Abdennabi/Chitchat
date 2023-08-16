import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">
        ChitChat
      </span>
      <div className="user">
        <img src="https://i.pinimg.com/474x/1f/83/c5/1f83c5ce9090c12d1969ad7a3745cc82.jpg" alt="" />        <span >Username</span>
        <button>Log Out</button>
      </div>
    </div>
  )
}

export default Navbar

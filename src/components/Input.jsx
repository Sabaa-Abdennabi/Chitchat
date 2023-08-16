import React from 'react'
import Attach from '../images/attach.png'
const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='type something' />
      <input type="file" name="" id="file" style={{ display: "none" }} />
      <label htmlFor="file">
        <img src={Attach} alt="" />
      </label>
      <button>Send</button>
    </div>
  )
}

export default Input

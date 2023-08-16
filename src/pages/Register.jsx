import Add from "../images/addAvatar.png"
const Register = () => {
  const handlesubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'> Chitchat</span>
            <span className='title'>Register</span>
            <form className="form" onSubmit={handlesubmit}>
                <input type="text" placeholder='insert your name' />
                <input type="email" placeholder='insert your email' />
                <input type="password" placeholder='insert your password' />
                <input type="file" id="file" style={{display:"none"}}/>
                <label htmlFor="file" >
                 <img src= {Add} alt=""></img>
                 <span>choose your profile picture !</span>
                </label>
                <button className='btn'>Sign up</button>
                <span className='link'>Already have an account? Login</span>

               
            </form>

        </div>
      
    </div>
  )
}

export default Register

import Add from "../images/addAvatar.png"
const Login = () => {
    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className='logo'> Chitchat</span>
                <span className='title'>Login</span>
                <form className="form">
                    <input type="text" placeholder='insert your name' />
                    <input type="password" placeholder='insert your password' />
                    <button className='btn'>Login</button>
                    <span className='link'>Don't have an account? Login</span>


                </form>

            </div>

        </div>
    )
}

export default Login

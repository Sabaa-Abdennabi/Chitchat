import { signInWithEmailAndPassword } from "firebase/auth";
import { auth} from "../firebase";
import { useState } from "react";
import {useNavigate,Link} from 'react-router-dom'

const Login = () => {
    const [err, setErr] = useState(false);
  const navigate=useNavigate();
  const handlesubmit = async (e) => {

    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
try {

      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }

  }
    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className='logo'> Chitchat</span>
                <span className='title'>Login</span>
                <form className="form" onSubmit={handlesubmit} >
                    <input type="text" placeholder='insert your name' />
                    <input type="password" placeholder='insert your password' />
                    <button className='btn' >Login</button>
                    <span className='link'>Don't have an account?<Link to="/register">Register</Link> </span>
                </form>

            </div>

        </div>
    )
}

export default Login

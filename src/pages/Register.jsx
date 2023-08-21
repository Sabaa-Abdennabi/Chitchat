import React, { useState } from "react";
import Add from "../images/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import {useNavigate,Link} from 'react-router-dom'




const Register = () => {

  const [err, setErr] = useState(false);
  const navigate=useNavigate();
  const handlesubmit = async (e) => {

    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];


    try {
      //create  USER
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //upload profile picture
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file)
        .then(() => {
          getDownloadURL(storageRef)
            .then(
              async (downloadURL) => {
                try {
                  //update the profile picture 

                  await updateProfile(res.user,
                    {
                      displayName,
                      photoURL: downloadURL,
                    });

                  console.log(res.user);

                  //create a user on the db

                  await setDoc(doc(db, "users", res.user.uid),
                    {
                      uid: res.user.uid,
                      displayName,
                      email,
                      photoURL: downloadURL,
                    });
                    
                  await setDoc(doc(db,"userChats",res.user.uid),{ });
                    navigate("/");
                }
                catch (error) {
                  console.log(error);
                  

                }
              });
        });
    } catch (err) {
      setErr(true);
    }





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
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file" >
            <img src={Add} alt=""></img>
            <span>choose your profile picture !</span>
          </label>
          <button className='btn'>Sign up</button>
          {err && <span style={{ color: "red", fontweight: "bold" }} className='error'>Something went wrong!</span>}
          <span className='link'>Already have an account?<Link to ="/Login"> Login</Link></span>


        </form>

      </div>

    </div>
  )
}

export default Register

import React, { useContext } from 'react'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import {AuthContext} from './context/AuthContext'



const App = () => {
  const {currentUser}=useContext(AuthContext);
  console.log(currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={currentUser? <Home/>: <Login/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
      </BrowserRouter >
      )
};

      export default App;

import React from 'react'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>


        </Route>
      </Routes>
      </BrowserRouter >
      )
};

      export default App;

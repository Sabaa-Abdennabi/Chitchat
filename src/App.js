import React, { useContext } from 'react'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  ProtectedRoute,
} from "react-router-dom";
import { AuthContext } from './context/AuthContext'



const App = () => {

  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  console.log(currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
};

export default App;

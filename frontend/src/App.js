import React from 'react'
import Login from './UserComponent/Login';
import SignUp from './UserComponent/Register';
import UserDetails from './UserComponent/UserDetail';
import AdminHome from'./UserComponent/AddmHome';
import UserHome from './UserComponent/UserHome';
import NavBar from './Pages/NavBar';
import NotFound from './Pages/NotFound'; 

import { Routes ,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './UserComponent/UserList';

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <div>
          <NavBar />
          <div className="container">
          <Routes>
           
           <Route exact path="/" element={isLoggedIn === "true" ? <UserDetails /> : <Login />} />

            <Route  path='/signUp' element={< SignUp/>} />
            <Route  path='/login' element={< Login/>} />
            <Route  path='/userDetail' element={< UserDetails/>} />
            <Route  path='/adminHome' element={< AdminHome/>} />
            <Route  path='/userHome' element={< UserHome/>} />
            <Route  path='/userlist' element={< UserList/>} />
            <Route  path='*' element={< NotFound/>} />
           
         </Routes>
         </div>
    </div>
  )
}

export default App

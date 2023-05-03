import React from 'react'
import './components/CSS/App.css'
import { Link } from 'react-router-dom';


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import UserDetails from './components/userDetails'
import Home from './components/pages/Home';
import Likes from './components/pages/Likes';
import Upload from './components/pages/Upload';
import Profile from './components/pages/Profile';
import Settings from './components/pages/Settings';
import About from './components/pages/About';


function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    
    <Router>
      <Navbar/>
      <div>

        <Routes>
          <Route exact path="/" element={isLoggedIn=="true"? <UserDetails /> : <Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/edit" element={<Profile />} />
          <Route path="/profile/settings" element={<Settings />} />

          <Route path="/userDetails" element={<UserDetails />} />
        </Routes>

      </div>
    </Router>
  )
}

export default App
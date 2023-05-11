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
          <Route exact path="/Matchbox" element={isLoggedIn=="true"? <UserDetails /> : <Home />} />
          <Route path="/Matchbox/Home" element={<Home />} />
          <Route path="Matchbox/likes" element={<Likes />} />
          <Route path="Matchbox/upload" element={<Upload />} />
          <Route path="Matchbox/about" element={<About />} />
          <Route path="Matchbox/signup" element={<SignUp />} />
          <Route path="Matchbox/login" element={<Login />} />
          <Route path="Matchbox/profile/edit" element={<Profile />} />
          <Route path="Matchbox/profile/settings" element={<Settings />} />

          <Route path="Matchbox/userDetails" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
import React from 'react'
import './components/CSS/App.css'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import UserDetails from './components/userDetails'
import Home from './components/pages/Home';
import Likes from './components/pages/Likes';
import Upload from './components/pages/Upload';
import About from './components/pages/About';

function App() {
  const isLoggedIn =window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <Navbar/>
        {/* home likes upload about*/}
      <div>
        <Routes>
          <Route exact path="/" element={isLoggedIn=="true"? <UserDetails /> : <Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/upload" element={<Upload />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userDetails" element={<UserDetails />} />

        </Routes>

          {/* <div>
            <SignUp/>
          </div> */}

      {/* <div className='match1'></div> */}
      </div>
    </Router>
  )
}

export default App

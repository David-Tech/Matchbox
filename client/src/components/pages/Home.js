import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/home.css';

function Home() {
  return (
  <div className="body-home">
    <h1>Welcome to Matchbox</h1>

    <p><Link className="sign-color" to="/Matchbox/signup">Sign up</Link></p>
    <p>or</p>
    <p><Link className="sign-color" to="/Matchbox/login">Login</Link></p>
    <br />
    <br />
    <a target="_blank" href="https://docs.google.com/presentation/d/1nlvxlSqlyKIxcrMWUEHL_s5ZkkbAApBC/edit?usp=sharing&ouid=112945152730092009592&rtpof=true&sd=true">User Documentation</a>
  </div>  
  )
}

export default Home;

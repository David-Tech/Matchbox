import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/home.css';

function Home() {
  return (
  <div className="body-home">
    <h1>Welcome to Matchbox</h1>
    <p><Link className="sign-color" to="./signup">Sign up</Link></p>
    <p>or</p>
    <p><Link className="sign-color" to="./login">Login</Link></p>
  </div>  
  )
}

export default Home;
